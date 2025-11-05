# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended - Free & Easy)

### Step 1: Push to GitHub
Make sure all your files are committed and pushed:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account (free)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect settings:
   - **Framework Preset**: Other (or leave blank)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave blank
   - **Output Directory**: Leave blank
6. Click **"Deploy"**
7. Wait 1-2 minutes for deployment
8. Your site will be live at: `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain

---

## Alternative: Deploy to Railway (Keep Express Server)

If you want to keep your Express server running:

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Sign up/login with your GitHub account
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your repository
6. Railway will auto-detect Node.js and deploy
7. Your site will be live at: `https://your-project-name.railway.app`

**Note**: Railway's free tier has usage limits. Vercel is better for static sites.

---

## Alternative: Deploy to Netlify (Also Free & Easy)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Settings:
   - **Build command**: Leave blank
   - **Publish directory**: Leave blank (or `./`)
6. Click **"Deploy site"**
7. Your site will be live at: `https://your-project-name.netlify.app`

---

## What Gets Deployed

Your site includes:
- ✅ All HTML files (index.html, game.html)
- ✅ CSS styling
- ✅ JavaScript functionality
- ✅ Assets folder (images, audio, Unity game)
- ✅ Starry background animation
- ✅ All your cards and content

---

## After Deployment

1. **Test your site** - Visit the provided URL
2. **Check Instagram embed** - Should work now that it's on HTTPS
3. **Test Unity game** - Make sure all files load correctly
4. **Test audio player** - Verify MP3 file plays

---

## Updating Your Site

To update your live site:
1. Make changes to your local files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```
3. Vercel/Netlify/Railway will automatically redeploy
4. Changes go live in 1-2 minutes

---

## Troubleshooting

**Files not loading?**
- Make sure all files are committed to git
- Check that file paths are correct (case-sensitive on some hosts)

**Instagram not loading?**
- Instagram embeds require HTTPS (works on Vercel/Netlify)

**Unity game not working?**
- Check browser console for errors
- Verify all Unity files are in `assets/UnityGame/`
- Make sure file paths match exactly

**Audio not playing?**
- Check file path in `data-audio-src` attribute
- Verify file is in the assets folder

---

## Recommended: Vercel

**Why Vercel?**
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Auto-deploys from GitHub
- ✅ Fast CDN
- ✅ Great for static sites
- ✅ Custom domains free

Your `vercel.json` is already configured, so it should work out of the box!
