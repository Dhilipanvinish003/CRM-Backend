const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmailOtp = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `"OTP Service" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Registration OTP",
      html: `
        <h2>Your OTP is ${otp}</h2>
        <p>This OTP is valid for 5 minutes.</p>
      `,
    });

    console.log("OTP email sent to:", email);
  } catch (err) {
    console.error("Email sending error:", err);
    throw err;
  }
};

module.exports = sendEmailOtp;
