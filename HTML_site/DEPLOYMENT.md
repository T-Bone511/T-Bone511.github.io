# 🚀 Deploy to tituspersons.com

## Quick Setup (5 minutes)

### Step 1: Push Everything to GitHub
```bash
cd HTML_site
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account (it's free)
3. Click **"Add New Project"**
4. Import your GitHub repository (the one with HTML_site)
5. **Settings** (leave these as default):
   - **Framework Preset**: Other
   - **Root Directory**: `./HTML_site` (or leave blank if repo root is HTML_site)
   - **Build Command**: Leave blank (no build needed)
   - **Output Directory**: Leave blank
6. Click **"Deploy"**
7. Wait 1-2 minutes

### Step 3: Connect Your Domain (tituspersons.com)
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Click **"Add"** and enter: `tituspersons.com`
4. Vercel will show you DNS records to add:
   - **Type**: A or CNAME
   - **Name**: @ (or leave blank)
   - **Value**: Vercel will provide this
5. Go to your domain registrar (where you bought tituspersons.com)
6. Add the DNS record Vercel provided
7. Wait 5-10 minutes for DNS to propagate
8. Your site will be live at `https://tituspersons.com`

### Step 4: Auto-Updates (Already Set!)
✅ **Done!** Every time you push to GitHub:
```bash
git add .
git commit -m "Update site"
git push origin main
```
Vercel automatically deploys your changes in 1-2 minutes. No extra steps needed!

---

## What Gets Deployed

- ✅ Your main site (index.html)
- ✅ Game page (game.html)
- ✅ All assets (images, audio, Unity game)
- ✅ All styling and scripts

---

## Troubleshooting

**Domain not working?**
- Check DNS records are correct in your domain registrar
- Wait 10-15 minutes for DNS propagation
- Vercel will show status in the Domains section

**Changes not updating?**
- Make sure you pushed to the correct branch (usually `main`)
- Check Vercel dashboard for deployment status
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)

**Instagram not loading?**
- Instagram embeds require HTTPS (Vercel provides this automatically)
- Should work once deployed on Vercel

---

## That's It!

Your site will be live at **tituspersons.com** and automatically update whenever you push to GitHub! 🎉
