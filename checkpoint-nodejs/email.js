const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dvp.nader@gmail.com',
    pass: 'ehqetqwgeztzruvy'
  }
});

const mailOptions = {
  from: 'dvp.nader@gmail.com',
  to: 'dvp.nader@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});