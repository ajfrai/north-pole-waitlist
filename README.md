<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://aistudio.corp.google.com/apps/drive/1Yd4K6mEMuWKqRP-ymKBQ5kvI0d7_1ScS

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

Deploy this app publicly in just a few clicks:

1. **Quick Deploy** (Recommended):
   - Click this button: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)
   - Or visit [vercel.com](https://vercel.com) and import your GitHub repository

2. **Configure Environment Variable**:
   - In your Vercel project settings, add the environment variable:
     - Name: `GEMINI_API_KEY`
     - Value: Your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)

3. **Deploy**:
   - Vercel will automatically build and deploy your app
   - You'll get a public URL like `your-app.vercel.app`

### Alternative Deployment Options

- **Netlify**: Import from Git at [netlify.com](https://netlify.com)
- **Cloudflare Pages**: Deploy via [pages.cloudflare.com](https://pages.cloudflare.com)
- **GitHub Pages**: Build locally with `npm run build` and deploy the `dist` folder

All platforms support the `GEMINI_API_KEY` environment variable needed for AI features.
