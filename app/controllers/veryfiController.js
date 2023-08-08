const Mail = require("../models/veryfiModel");
const nodemailer = require('nodemailer');

const mailSend = async (req, res) => {
    const { email, number } = req.body;

    // Create a new Mail document and save it to the database
    try {
        const newMail = new Mail({
            email: email,
            number: number,
        });

        await newMail.save();

        // Send the email with the verification number
        sendEmail(email, number);

        res.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log('Error saving email:', error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
};

// Function to send the email
const sendEmail = (recipientEmail, randomNumber) => {
    // Replace the following with your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Replace with your SMTP server address
        port: 465, // Replace with your SMTP port
        secure: true, // Set to true if your SMTP server requires a secure connection
        auth: {
            user: 'sankalpalearnmaths@gmail.com', // Replace with your email address
            pass: 'zdpkgozmtkignrjd', // Replace with your email password or an app-specific password
        },
    });

    const mailOptions = {
        from: 'sankalpalearnmaths@gmail.com', // Replace with your email address
        to: recipientEmail,
        subject: 'Verification Code',
        html: `<p><strong style="font-size: 18px;">Your verification code is: ${randomNumber}</strong></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

exports.mailSend = mailSend;
