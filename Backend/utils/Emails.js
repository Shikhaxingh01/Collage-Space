const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
exports.sendMail = async (receiverEmail, subject, body) => {
  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: receiverEmail,
      subject: subject,
      html: body,
    });
    console.log(`✅ Email sent to: ${receiverEmail}`);
    console.log("📩 Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending email: ", error);
  }
};

