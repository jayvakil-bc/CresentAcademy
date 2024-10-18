// crescent-academy/app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 587, 
        secure: false, 
        auth: {
            user: process.env.EMAIL_USER, // Your email address from environment variable
            pass: process.env.EMAIL_PASS, // Your email password or App Password from environment variable
        },
    });

    // Email options
    const mailOptions = {
        from: '"Crescent Academy" <your_email@example.com>', // Sender address
        to: 'info@crescentacademy.com', // List of receivers
        subject: 'New Quote Request', // Subject line
        text: `You have a new quote request from ${name}.\n\nEmail: ${email}\n\nMessage:\n${message}`, // Plain text body
        html: `<p>You have a new quote request from <strong>${name}</strong>.</p><p>Email: <a href="mailto:${email}">${email}</a></p><p>Message:</p><p>${message}</p>`, // HTML body
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email.', error: error.message }), { status: 500 });
    }
}
