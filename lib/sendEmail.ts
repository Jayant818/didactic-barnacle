"use server";
import nodemailer from "nodemailer";

const sendEmail = async () => {
	// Create a transporter
	const transporter = nodemailer.createTransport({
		host: "smtp.example.com",
		port: 587,
		secure: false,
		auth: {
			user: "your-email@example.com",
			pass: "your-password",
		},
	});

	// Define the email options
	const mailOptions = {
		from: "yadavjayant2003@gmail.com",
		to: "yadavjayant2003@gmail.com",
		subject: "Hello from Next.js",
		text: "This is a test email sent from Next.js!",
	};

	try {
		// Send the email
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent:", info.messageId);
	} catch (error) {
		console.error("Error sending email:", error);
	}
};

sendEmail();
