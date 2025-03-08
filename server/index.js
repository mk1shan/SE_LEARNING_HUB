const express = require('express');
const cors = require('cors');
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const app = express();

// Configure CORS properly
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Configure Brevo API client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/send-thank-you', async (req, res) => {
  try {
    const { email, name, resourceName } = req.body;

    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required'
      });
    }

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.to = [{
      email: email,
      name: name || 'User'
    }];

    // Use a verified sender from your Brevo account
    sendSmtpEmail.sender = {
      email: "mudipaimayangakdu@gmail.com",
      name: "SE Learning Hub"
    };

    // If you don't have a template, send a basic email
    if (!sendSmtpEmail.templateId) {
      sendSmtpEmail.subject = 'Thank you for your resource recommendation';
      sendSmtpEmail.htmlContent = `
        <h1>Thank you for your recommendation!</h1>
        <p>Hello ${name || 'there'},</p>
        <p>Thank you for recommending "${resourceName || 'the learning resource'}".</p>
        <p>We'll review your submission and add it to our collection soon.</p>
        <p>Best regards,<br>SE Learning Hub Team</p>
      `;
    } else {
      // If you have a template set up in Brevo
      sendSmtpEmail.templateId = 1; // Replace with your actual template ID
      sendSmtpEmail.params = {
        userName: name || 'there',
        resourceName: resourceName || 'learning resource'
      };
    }

    console.log('Attempting to send email with configuration:', {
      to: sendSmtpEmail.to,
      sender: sendSmtpEmail.sender,
      templateId: sendSmtpEmail.templateId,
      subject: sendSmtpEmail.subject
    });

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully:', data);
    
    return res.status(200).json({ 
      success: true, 
      messageId: data.messageId,
      message: 'Thank you email sent successfully'
    });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message,
      message: 'Failed to send thank you email'
    });
  }
});

const PORT = process.env.PORT || 5000;

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
});