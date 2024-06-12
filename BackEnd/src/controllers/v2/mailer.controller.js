const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });


  const sendMail = async (req, res) => {
    try {
        const {to, subject, text } = req.body;
        console.log(to, subject, text);
        const mailOptions = {
            from: '"MyFahasa" <tranhuuhoang692@gmail.com>',
            to: to,
            subject: subject,
            text: text,
        };
        await transporter.sendMail(mailOptions);
        data ={
            message: "Success",
            status: 200,
        }
        res.json(data);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { sendMail };