# AuthFlow - Google OAuth Authentication System

A clean and secure full-stack authentication application that allows users to login with Google using OAuth 2.0.

## Overview
I always wondered how "Login with Google" works behind the scenes. Turns out it's simpler than I thought — and completely free to implement. So I built **AuthFlow** to understand the full authentication flow from frontend to backend.

## Features
- Google OAuth 2.0 login using Passport.js
- Secure session management with express-session
- Protected routes and proper logout functionality
- Modern glassmorphism UI with smooth animations
- Responsive design for mobile and desktop
- Dynamic user profile display after login

## Tech Stack
- **Backend**: Node.js, Express.js
- **Authentication**: Passport.js + passport-google-oauth20
- **Frontend**: EJS (Server-Side Rendering), Tailwind CSS
- **Session Management**: express-session
- **Environment Variables**: dotenv
- **Other**: JavaScript, HTML, CSS

## Screenshort

<img width="1500" height="700" alt="Screenshot 2026-07-26 155811" src="https://github.com/user-attachments/assets/6ad8c9b3-9011-42b7-a2df-ee0f7ddc4a85" />
<img width="500" height="500" alt="Screenshot 2026-07-26 155822" src="https://github.com/user-attachments/assets/1e6b80ec-1740-4a41-8882-ed405e96c2cd" />
<img width="500" height="500" alt="Screenshot 2026-07-26 155830" src="https://github.com/user-attachments/assets/89921afb-54d1-4c40-8fa4-9295b9012271" />

## How to Run Locally
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file and add your Google OAuth credentials
4. Run `npm start`
5. Open `http://localhost:3000`

## What I Learned
- How OAuth 2.0 authentication works
- Middleware execution in Express
- Secure session handling
- Combining modern UI with backend logic

---

### Try your self:  [AuthFlow](https://authflow-v2jy.onrender.com/)
