
const nodemailer = require("nodemailer");
exports.Email= async (emailData,verificationCode,name)=> {
    console.log(emailData,"eDataa")
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "anas.taurus138@gmail.com", // generated ethereal user
      pass: "flzzcrvrsdcetzet", // generated ethereal password
    },
  });

  const mailOptions = {
    from: 'anas.taurus138@gmail.com',
    to: emailData,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html:`<button> <a href='http://localhost:3000/${verificationCode}&&${name}'>verify</a></button>`
  };
 const sentMail = await transporter.sendMail(mailOptions);
 if(sentMail){
     return sentMail
 } 
 return null 
  
}