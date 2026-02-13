# UltraUtils Deployment Guide 🚀

This guide will help you deploy your utility tools platform to **Vercel** for free and set up your analytics.

## 1. Prepare your GitHub Repository
1. Create a new repository on [GitHub](https://github.com/).
2. Upload your project code to this repository.

## 2. Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/) (using your GitHub account).
2. Click **Add New** > **Project**.
3. Import your `utility-tools` repository.
4. **Environment Variables (CRITICAL)**:
   - Before clicking "Deploy", expand the **Environment Variables** section.
   - Add the following:
     - **Name**: `NEXT_PUBLIC_GA_ID`
     - **Value**: `G-GHVCH28K7J` (Your Measurement ID)
5. Click **Deploy**.

## 3. Post-Deployment Setup
Once deployed, Vercel will give you your URL: `ultra-utils.vercel.app`.

### Verify Analytics
1. **Vercel Analytics**: In your Vercel project dashboard, go to the **Analytics** tab and click **Enable**.
2. **Google Analytics**: Visit your live site, then check the **Real-time** report in your Google Analytics dashboard. You should see a visitor (you!) appear within a minute.

### SEO & Sitemap
Search engines will automatically find your `sitemap.xml` and `robots.txt` at your new domain. You can also submit the sitemap URL directly to [Google Search Console](https://search.google.com/search-console/about) for faster indexing.

## 4. Monetization (AdSense)
1. Apply for [Google AdSense](https://adsense.google.com/) using your new `.vercel.app` URL.
2. Once approved, you just need to update the `AdBanner.tsx` component with your real AdSense Client ID!

Congratulations on launching your global utility platform! 🎉
