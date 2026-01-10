// Vercel Serverless Function for Contact Form
// Uses Web3Forms webhook service

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all fields.'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address.'
            });
        }

        // Web3Forms API endpoint
        const web3FormsUrl = 'https://api.web3forms.com/submit';

        // You'll need to get a free access key from https://web3forms.com
        // For now, using a placeholder - user needs to replace this
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY || '2c59c9e7-d169-4963-9123-7e5f362eb1c4';

        // Prepare form data for Web3Forms
        const formData = {
            access_key: accessKey,
            name: name,
            email: email,
            message: message,
            subject: `New Contact Form Submission from ${name}`,
            from_name: 'GOAT Produces Website',
        };

        // Send to Web3Forms
        const response = await fetch(web3FormsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            return res.status(200).json({
                success: true,
                message: 'Message sent successfully!'
            });
        } else {
            console.error('Web3Forms error:', data);
            return res.status(500).json({
                success: false,
                message: 'Failed to send message. Please try again.'
            });
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again later.'
        });
    }
}
