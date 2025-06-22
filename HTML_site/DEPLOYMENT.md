# 🚀 Complete Deployment Guide: React → HTML Pixel Art with Multiplayer

## Overview
This guide will help you:
1. Replace your React site with the HTML pixel art site
2. Deploy the frontend to Vercel (free)
3. Deploy the backend to Railway (free)
4. Connect them for multiplayer functionality

---

## 📋 Prerequisites
- GitHub account
- Vercel account (free at vercel.com)
- Railway account (free at railway.app)
- Node.js installed locally (for testing)

---

## 🎯 Step 1: Prepare Your Repository

### Option A: Replace Existing React Site
```bash
# Navigate to your existing React repository
cd your-react-repo

# Backup your React files (optional)
mkdir react-backup
cp -r src public package.json react-backup/

# Remove React files
rm -rf src public package.json package-lock.json node_modules

# Copy your HTML_site files to the root
cp -r ../HTML_site/* .

# Commit the changes
git add .
git commit -m "Replace React with HTML pixel art site"
git push origin main
```

### Option B: Create New Repository
```bash
# Create new directory
mkdir pixel-art-website
cd pixel-art-website

# Copy your HTML_site files
cp -r ../HTML_site/* .

# Initialize git
git init
git add .
git commit -m "Initial pixel art site"

# Create new repository on GitHub, then:
git remote add origin https://github.com/yourusername/pixel-art-website.git
git push -u origin main
```

---

## 🌐 Step 2: Deploy Frontend to Vercel

### 2.1 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Vercel
- **Framework Preset**: Other
- **Root Directory**: `./` (leave blank)
- **Build Command**: Leave blank
- **Output Directory**: Leave blank
- **Install Command**: Leave blank

### 2.3 Deploy
1. Click "Deploy"
2. Wait for deployment (usually 1-2 minutes)
3. Your site will be available at: `https://your-project-name.vercel.app`

---

## ⚙️ Step 3: Deploy Backend to Railway

### 3.1 Prepare Backend Files
Create a new directory for the backend:
```bash
mkdir pixel-art-backend
cd pixel-art-backend

# Copy server files
cp ../HTML_site/server.js .
cp ../HTML_site/package.json .
cp ../HTML_site/railway.json .
```

### 3.2 Update Server for Production
Edit `server.js` to add CORS and environment variables:

```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: ["https://your-project-name.vercel.app", "http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));

// ... rest of your server code ...

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### 3.3 Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Choose "Deploy from GitHub repo"
5. Select your backend repository
6. Railway will automatically detect Node.js and deploy

### 3.4 Get Your Backend URL
1. After deployment, click on your project
2. Go to "Settings" tab
3. Copy the "Domain" URL (looks like: `https://your-app-name.railway.app`)

---

## 🔗 Step 4: Connect Frontend to Backend

### 4.1 Update Frontend for Production
Edit `pixel-art.html` to connect to your Railway backend:

```javascript
// Replace this line:
const socket = io();

// With this:
const socket = io('https://your-app-name.railway.app');
```

### 4.2 Update CORS in Backend
In your Railway backend `server.js`, update the CORS origin:

```javascript
const io = socketIo(server, {
    cors: {
        origin: ["https://your-project-name.vercel.app"],
        methods: ["GET", "POST"]
    }
});
```

### 4.3 Redeploy Both
1. **Frontend**: Push changes to GitHub, Vercel auto-deploys
2. **Backend**: Push changes to GitHub, Railway auto-deploys

---

## 🧪 Step 5: Test Your Multiplayer Site

### 5.1 Test Locally First
```bash
# Test backend
cd pixel-art-backend
npm install
npm start

# Test frontend (open pixel-art.html in browser)
# Update socket connection to: const socket = io('http://localhost:3000');
```

### 5.2 Test Production
1. Open your Vercel URL: `https://your-project-name.vercel.app`
2. Use password "art" to access pixel art
3. Open multiple browser tabs/windows
4. Place pixels and see them sync in real-time!

---

## 🔧 Troubleshooting

### Common Issues:

**1. CORS Errors**
- Make sure your Railway backend CORS origin matches your Vercel URL exactly
- Check browser console for CORS errors

**2. Socket Connection Fails**
- Verify your Railway backend URL is correct
- Check Railway logs for errors
- Make sure the backend is running

**3. Pixels Not Syncing**
- Check browser console for WebSocket errors
- Verify both frontend and backend are deployed
- Test with multiple browser windows

**4. Deployment Fails**
- Check that all files are committed to GitHub
- Verify package.json has correct dependencies
- Check Railway/Vercel logs for build errors

---

## 📊 Monitoring

### Vercel Monitoring
- Go to your Vercel dashboard
- Check "Analytics" for visitor stats
- Monitor "Functions" for any serverless issues

### Railway Monitoring
- Go to your Railway dashboard
- Check "Metrics" for server performance
- Monitor "Logs" for any errors

---

## 🎉 Success!

Your multiplayer pixel art site is now live at:
- **Frontend**: `https://your-project-name.vercel.app`
- **Backend**: `https://your-app-name.railway.app`

Multiple people can now visit your site and collaborate on the pixel art canvas in real-time!

---

## 🔄 Updates

To update your site:
1. Make changes to your local files
2. Push to GitHub
3. Vercel and Railway will auto-deploy
4. Changes go live in 1-2 minutes

---

## 💰 Costs

- **Vercel**: Free tier (unlimited deployments)
- **Railway**: Free tier (limited usage, but sufficient for small projects)
- **Total**: $0/month for basic usage 