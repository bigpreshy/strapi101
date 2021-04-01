
const nodemailer = require('nodemailer');
const userEmail = process.env.MYEMAIL
const userPass = process.env.MYPASS
// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: userEmail,
    pass: userPass,
  },
});
module.exports = {
  send: (from, to, subject, text) => {
    // Setup e-mail data.
    const options = {
      from,
      to,
      subject,
      text,
    };
    // Return a promise of the function that sends the email.
    return transporter.sendMail(options);
    
  },
};