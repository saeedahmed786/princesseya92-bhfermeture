// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, date, time, message } = req.body;

        // Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or any other email service you prefer
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail or email username
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password if using Gmail
            },
        });

        try {
            // Send mail with the provided details
            await transporter.sendMail({
                from: email, // Sender's email
                to: email, // Your email where the form details will be sent
                subject: `New Inquiry from ${name}`, // Subject line
                html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px; border: 1px solid #ddd;">
    <div style="background-color: #2c3e50; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
      <h1 style="color: #ecf0f1; font-size: 24px; margin: 0;">New Inquiry Details</h1>
    </div>
    <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px;">
      <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Hello,</p>
      <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
        You have received a new inquiry with the following details:
      </p>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Date and Time for Contact:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${date} ${time}</td>
        </tr>
        <tr style="width: 100%; vertical-align: top;">
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${message}</td>
        </tr>
      </table>
    </div>
  </div>
`

            });

            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
