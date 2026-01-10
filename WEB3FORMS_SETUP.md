# Web3Forms Setup Guide

## What is Web3Forms?
Web3Forms is a free contact form API that doesn't require a backend. It handles form submissions and sends emails to your inbox.

## Setup Steps

### 1. Get Your Access Key
1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address where you want to receive contact form submissions
3. Click "Get Access Key"
4. Check your email and verify your email address
5. Copy your access key (it looks like: `abcd1234-5678-90ef-ghij-klmnopqrstuv`)

### 2. Add Access Key to Vercel (For Production)

When deploying to Vercel:

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add a new environment variable:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: Your Web3Forms access key
   - **Environment**: Select all (Production, Preview, Development)
4. Click "Save"
5. Redeploy your application

### 3. For Local Development

Create a `.env` file in the project root:

```bash
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

**Important**: Make sure `.env` is in your `.gitignore` file so you don't accidentally commit your access key!

### 4. Email Configuration

By default, Web3Forms will send emails to the address you registered with. You can customize:

- **Subject line**: Already configured as "New Contact Form Submission from {name}"
- **From name**: Set to "GOAT Produces Website"
- **Redirect URL**: You can add a custom redirect after form submission (optional)

### 5. Optional Customizations

In `api/contact.js`, you can add more fields to the `formData` object:

```javascript
formData: {
    access_key: accessKey,
    name: name,
    email: email,
    message: message,
    subject: `New Contact Form Submission from ${name}`,
    from_name: 'GOAT Produces Website',
    // Optional additions:
    redirect: 'https://yourwebsite.com/thank-you', // Redirect URL
    botcheck: '', // Honeypot for spam prevention
}
```

## Testing

1. Make sure your access key is set up (either in `.env` or Vercel environment variables)
2. Run the development server
3. Fill out the contact form
4. Submit and check your email!

## Troubleshooting

- **"Failed to send message"**: Check that your access key is correctly set in environment variables
- **Not receiving emails**: Verify your email address with Web3Forms and check spam folder
- **401 Unauthorized**: Your access key may be incorrect or expired
