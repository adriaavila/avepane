# Instagram API Setup Guide

This document explains how to configure the Instagram Graph API for the Instagram feed section on the Actualidad page.

## Prerequisites

1. A Facebook Business Account
2. An Instagram Business or Creator account (@avepane_oficial)
3. A Facebook App with Instagram Graph API access

## Setup Steps

### 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use an existing one
3. Add the "Instagram Graph API" product to your app

### 2. Get Instagram Business Account ID

1. In your Facebook App, go to Instagram Graph API > Basic Display
2. Find your Instagram Business Account ID (User ID)

### 3. Generate Access Token

1. Go to Graph API Explorer: https://developers.facebook.com/tools/explorer/
2. Select your app
3. Generate a User Token with the following permissions:
   - `instagram_basic`
   - `pages_read_engagement`
   - `instagram_graph_user_media`
4. Exchange the short-lived token for a long-lived token (60 days)
5. For production, set up a token refresh mechanism

### 4. Configure Environment Variables

Add the following to your `.env.local` file:

```env
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
INSTAGRAM_USER_ID=your_instagram_user_id_here
```

**Important:** Never commit these values to version control. They should only exist in `.env.local` (which is already in `.gitignore`).

## Token Refresh

Instagram access tokens expire after 60 days. You'll need to:

1. Set up a cron job or scheduled task to refresh tokens
2. Use Facebook's token exchange endpoint to get new long-lived tokens
3. Update your environment variables

For production, consider using Facebook's token refresh mechanism or a service that handles this automatically.

## Testing

Once configured, visit `/actualidad` to see the Instagram feed section. If posts don't appear:

1. Check browser console for errors
2. Verify environment variables are set correctly
3. Test the API endpoint directly: `/api/instagram`
4. Ensure your Instagram account has public posts

## Troubleshooting

### "Instagram API not configured" error
- Verify `INSTAGRAM_ACCESS_TOKEN` and `INSTAGRAM_USER_ID` are set in `.env.local`
- Restart your Next.js development server after adding environment variables

### "Failed to fetch Instagram posts" error
- Check if your access token is valid and not expired
- Verify the User ID is correct
- Ensure your Instagram account is a Business or Creator account (not Personal)

### No posts appearing
- Verify your Instagram account has public posts
- Check that the API permissions are correctly set
- Review the browser console and server logs for specific error messages

## Security Notes

- Keep access tokens secure and never expose them in client-side code
- Use environment variables for all sensitive credentials
- Regularly rotate access tokens
- Monitor API usage to avoid rate limits
