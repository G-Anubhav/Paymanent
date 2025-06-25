import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { fullName, email, phone, company, businessType, website, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: "send.one.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: '"Paymanent.com Website" <anubhav.goyel@fsixit.com>',
            to: "info@paymanent.com",
            subject: `New Lead - Contact Form Submission from Paymanent.com`,
            html: `
        <h3>Contact Form Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).json({ success: false, message: "Email failed to send" });
    }
}
