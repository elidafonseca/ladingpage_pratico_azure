# Supabase Edge Function Setup Guide

This guide explains how to deploy the email notification Edge Function to your Supabase project.

## Prerequisites

1. Supabase CLI installed: https://supabase.com/docs/guides/cli
2. Resend account and API key: https://resend.com
3. Completed database setup from SUPABASE_SETUP.md

## Step 1: Link Your Project

Your project is already connected via Figma Make:
- Project ID: `qyeefnxupzbxgqinposi`
- Dashboard: https://supabase.com/dashboard/project/qyeefnxupzbxgqinposi

To deploy the Edge Function, link your project:

```bash
supabase login
supabase link --project-ref qyeefnxupzbxgqinposi
```

## Step 2: Set Environment Secrets

Set these secrets in your Supabase project:

```bash
# Your Resend API key
supabase secrets set RESEND_API_KEY=re_your_resend_api_key

# The email address to send FROM (must be verified in Resend)
supabase secrets set FROM_EMAIL=noreply@yourdomain.com

# The email address to send TO (where notifications will be sent)
supabase secrets set ADMIN_EMAIL=admin@yourdomain.com
```

## Step 3: Deploy the Edge Function

```bash
supabase functions deploy send-form-notification
```

## Step 4: Test the Deployment

Test the Edge Function directly:

```bash
curl -i --location --request POST 'https://qyeefnxupzbxgqinposi.supabase.co/functions/v1/send-form-notification' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZWVmbnh1cHpieGdxaW5wb3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNTk1MDksImV4cCI6MjA5MzczNTUwOX0.WgLCb3QSbHxLvA3REh0P5OV3fe5y1vgsoctth5i_m4c' \
  --header 'Content-Type: application/json' \
  --data '{"type":"contact_message","data":{"name":"Test User","email":"test@example.com","subject":"Test Subject","message":"Test message","created_at":"2026-05-07T12:00:00Z"}}'
```

## Resend Setup

1. Sign up at https://resend.com
2. Add and verify your domain (or use Resend's test domain for testing)
3. Create an API key in the Resend dashboard
4. Use the API key in the RESEND_API_KEY secret above

### Using Resend Test Domain (for testing only)

For testing, you can use `onboarding@resend.dev` as the FROM_EMAIL. This doesn't require domain verification but has sending limits.

### Production Setup

For production:
1. Add your domain in Resend
2. Add the required DNS records (MX, TXT, CNAME)
3. Wait for verification (usually a few minutes)
4. Use an email from your verified domain as FROM_EMAIL (e.g., noreply@yourdomain.com)

## Troubleshooting

### Function Deployment Fails

Check that you're in the project root directory and the function file exists at:
```
supabase/functions/send-form-notification/index.ts
```

### Email Not Sending

1. Check function logs:
```bash
supabase functions logs send-form-notification
```

2. Verify secrets are set:
```bash
supabase secrets list
```

3. Verify your FROM_EMAIL is verified in Resend

### CORS Errors

The function includes CORS headers for all origins (`Access-Control-Allow-Origin: *`). For production, you may want to restrict this to your domain.

## Email Templates

The function sends two types of emails:

### Beta Access Email
- Subject: "Nova solicitação de acesso beta - Prático Digital"
- Includes: full_name, email, company_name, position, cnpj, phone, created_at

### Contact Message Email
- Subject: "Nova mensagem de contato - Prático Digital"
- Includes: name, email, subject, message, created_at

## Security Notes

- Edge Function secrets are never exposed to the frontend
- Only the public anon key is used from the frontend
- Resend API key is stored securely in Supabase secrets
- Email sending happens server-side only
- FROM_EMAIL and ADMIN_EMAIL are configurable per environment

## Local Development

To test locally:

```bash
# Start Supabase locally
supabase start

# Set local secrets (create .env file in supabase/functions/send-form-notification/)
echo "RESEND_API_KEY=re_your_key" > supabase/functions/send-form-notification/.env
echo "FROM_EMAIL=noreply@yourdomain.com" >> supabase/functions/send-form-notification/.env
echo "ADMIN_EMAIL=admin@yourdomain.com" >> supabase/functions/send-form-notification/.env

# Serve function locally
supabase functions serve send-form-notification
```

Test locally:
```bash
curl -i --location --request POST 'http://localhost:54321/functions/v1/send-form-notification' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{"type":"contact_message","data":{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message","created_at":"2026-05-07T12:00:00Z"}}'
```

## Production Checklist

- [ ] Resend domain verified
- [ ] RESEND_API_KEY secret set
- [ ] FROM_EMAIL secret set (using verified domain)
- [ ] ADMIN_EMAIL secret set
- [ ] Edge Function deployed
- [ ] Test email sent successfully
- [ ] Frontend environment variables set (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- [ ] Database tables created with RLS policies
- [ ] Forms tested end-to-end (database insert + email notification)
