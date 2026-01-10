// Vercel Serverless Function for Contact Form
// Uses Web3Forms webhook service

module.exports = async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests for actual form submission
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

        // Get access key from environment variable
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.error('WEB3FORMS_ACCESS_KEY not set in environment variables');
            return res.status(500).json({
                success: false,
                message: 'Contact form is not configured. Please contact the administrator.'
            });
        }

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
};

