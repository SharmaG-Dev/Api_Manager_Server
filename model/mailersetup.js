const nodemailer = require('nodemailer');
require('dotenv').config()



const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSKEY
    }
});


// Email Password Mail Registration Mail c

const RegMail = (data) => {
    return `<!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #4285f4;
          color: white;
          padding: 10px;
          text-align: center;
        }
        .content {
          padding: 20px;
        }
        .footer {
          background-color: #f4f4f4;
          padding: 10px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Our Platform</h1>
        </div>
        <div class="content">
          <p>Hello, ${data.name}</p>
          <p>Your registration on our platform is now complete. We're thrilled to have you as a member!</p>
          <p>Here are your registration details:</p>
          <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong>${data.email}</li>
            <li><strong>Password:</strong> ${data.password}</li>
          </ul>
          <p>You can now log in using your username and password to access all the features of our platform.</p>
          <p>Thank you for joining us!</p>
          <p>Best regards,</p>
          <p>The Platform Team</p>
        </div>
        <div class="footer">
          <p>If you have any questions, please contact us </p>
        </div>
      </div>
    </body>
    </html>
    
    `
}




module.exports = { transporter, RegMail }