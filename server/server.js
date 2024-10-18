// server/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // If you need CORS

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow requests from your frontend (optional)

const transporter = nodemailer.createTransport({
    service: 'gmail', // Example with Gmail; you can use other services
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password', // Your email password (consider using environment variables)
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender's email
        to: 'recipient-email@example.com', // Your recipient email
        subject: `New Quote Request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 3001; // Different port from Next.js
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
