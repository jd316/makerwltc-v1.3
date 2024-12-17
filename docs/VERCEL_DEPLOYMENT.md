# Deploying LiteMaker to Vercel

This guide explains how to deploy the LiteMaker frontend to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (can sign up with GitHub)
3. Your LiteMaker repository pushed to GitHub

## Deployment Steps

### 1. Push to GitHub

First, ensure your repository is properly initialized and configured:

```bash
# Initialize git if not already done
git init

# Add the remote repository
git remote add origin https://github.com/jd316/makerwltc-v1.3.git

# Create and switch to main branch if not already on it
git checkout -b main

# Add all files
git add .

# Commit changes
git commit -m "Initial commit for Vercel deployment"

# Push to GitHub
git push -u origin main
```

### 2. Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your LiteMaker repository (`jd316/makerwltc-v1.3`)
4. Select the "frontend" directory as the root directory

### 3. Configure Environment Variables

Add the following environment variables in Vercel project settings:

```
REACT_APP_CHAIN_ID=80002
REACT_APP_RPC_URL=https://rpc-amoy.polygon.technology
REACT_APP_EXPLORER_URL=https://www.oklink.com/amoy
```

### 4. Build Settings

Use these build settings:

- Framework Preset: Create React App
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

### 5. Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be live at `litemaker.vercel.app` or your custom domain

## Custom Domain Setup

1. Go to Project Settings > Domains
2. Add your domain (e.g., `app.litemaker.finance`)
3. Configure DNS settings:
   - Add an A record pointing to 76.76.21.21
   - Add a CNAME record for www pointing to cname.vercel-dns.com

## Troubleshooting

- Check build logs for errors
- Verify environment variables
- Ensure all dependencies are in package.json
- Check if the frontend directory is selected correctly

## Automatic Deployments

Vercel will automatically deploy when you push changes to your GitHub repository:

```bash
# Make changes to your code
git add .
git commit -m "Update feature XYZ"
git push origin main
```

## Support

For issues:
1. Check Vercel build logs
2. Review environment variables
3. Join our Discord community: [https://discord.gg/litemaker](https://discord.gg/litemaker)

## Security Notes

- Never commit .env files
- Keep your API keys secure
- Use environment variables for sensitive data
- Enable 2FA on both GitHub and Vercel accounts