require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const server = express();

// 1. Static and Template Configuration
server.set('view engine', 'ejs');
server.use(express.static('public'));

// 2. Session Middleware (Uses your SESSION_SECRET to encrypt cookies)
server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// 3. Initialize Passport Authentication Lifecycle
server.use(passport.initialize());
server.use(passport.session());

// 4. Configure Google Authentication Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // This runs when authentication succeeds. 
    // "profile" holds user information sent back securely from Google.
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// 5. Route Handlers
server.get('/', (req, res) => {
    res.render('welcome');
});

// Triggers the Google selection popup window
server.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// 1. Update the Logout route to target our new '/goodbye' screen
server.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/goodbye'); // Redirects to our intermediate countdown page
    });
});

// 2. Render the intermediate countdown template
server.get('/goodbye', (req, res) => {
    res.render('goodbye');
});

server.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Crucial fix: You must explicitly pass the 'req.user' object 
    // to the view template so EJS knows who 'user' is!
    res.render('logout', { user: req.user });
  }
);

// 6. Start Server Listener
const port = 3000;
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
