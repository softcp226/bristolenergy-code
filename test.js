// // // let currentdate = new Date();
// // // const monthNames = [
// // //   "January",
// // //   "February",
// // //   "March",
// // //   "April",
// // //   "May",
// // //   "June",
// // //   "July",
// // //   "August",
// // //   "September",
// // //   "October",
// // //   "November",
// // //   "December",
// // // ];

// // // let datetime = `${
// // //   monthNames[currentdate.getMonth()]
// // // } ${currentdate.getDate()} ${currentdate.getFullYear()} - ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
// // // // console.log(datetime)
// // // // console.log()

// // const fetch = require("isomorphic-fetch");
// // const approve_deposit = async (user_form) => {

// //   try {
// //     const response = await fetch("http://localhost:3000/api/admin/deposit/approve", {
// //       method: "POST",
// //       headers:{"content-type":"application/json"},
// //       body:JSON.stringify(user_form)

// //     });
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // approve_deposit({
// //   admin: "632c45376d593dd16347a6ca",
// //   token:
// //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyYzQ1Mzc2ZDU5M2RkMTYzNDdhNmNhIiwiaWF0IjoxNjY0ODEwMjQyfQ.mso3hVtvvYkZV3Zwi0sAoX7ZbManPl5sAhdFGxMTGBc",
// //   deposit_request: "633b1bdef9c41a174bd49241",
// //   deposit_amount: 100000,
// // });

// const set_expiring_date = (req) => {
//   let date = new Date();
//   date.setDate(date.getDate() + 7);
//   let end_date = date.getDate();
//   return end_date;
// };
// console.log(set_expiring_date());

// let currentdate = new Date();
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// let datetime = `${
//   monthNames[currentdate.getMonth()]
// } ${currentdate.getDate()} ${currentdate.getFullYear()} - ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

//   let date = new Date();

// date.setDate(date.getDate() + 18);

// let result = `${
//   monthNames[date.getMonth()]
// } ${date.getDate()} ${date.getFullYear()} - ${date.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// console.log(result)

// const Payment_proccessing = require("./model/proccessings");

// const create_payment_proccessing = async () => {
//   try {
//     const payment_processing = await new Payment_proccessing({
//       name: "Bitcoin",
//       wallet_address: "btc-wallet-me",
//       // wallet_note:`send ${"am"}`
//       icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTuyc5UTf_-kvmj_bwOPbFvZvoq-LhlkO7OV6B5ZAb_Qgx9iwYQlah17gnnlrn1r-RW8&usqp=CAU",
//       deposit_enabled: true,
//       withdrawal_enabled: true,
//       total_system_earnings: 0,
//       total_users_balance: 0,
//       total_referral_commision: 0,
//       total_withdrawals: 0,
//       pending_withdrawals: 0,
//     });
//     await payment_processing.save();
//     console.log(payment_processing);
//   } catch (error) {
//     console.log(error);
//   }
// };
// create_payment_proccessing();

// const Investment_Package=require("./model/investment-package");

// const create_investment_package=async()=>{
// try {
//   const investment_package=await new Investment_Package({
//    name:"Basic Plan" ,
//    min:50,
//    max:500,
//    percentage:20
//   })
//   const result=await investment_package.save()
//   console.log(result)
// } catch (error) {
//  console.log(error) 
// }
// }
// create_investment_package()














//  const transporter = nodemailer.createTransport(
//    smtpTransport({
//      host: "mail.cryptocom-mining.com",
//      secureConnection: false,
//      tls: {
//        rejectUnauthorized: false,
//      },
//      port: 587,
//      auth: {
//        user: "support@cryptocom-mining.com",
//        pass: "bishop1@1",
//      },
//    }),
//  );

const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "info.bristolenergy@gmail.com",
    // pass: "desolidboy1",
    pass: "wwrqosspafoxeedc",
    // secure:false,
  },
});

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.bristolenergy.ltd",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 465,
//     auth: {
//       user: "support@bristolenergy.ltd",
//       pass: "bristolenergy1@1",
//     },
//   }),
// );

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "info@bristolenergy.ltd",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Account Registration Notification`,
    //   text:"just wanna know if this works",
    html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<div
  class="maincontainer"
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
>
  <div class="head-txt">
    <h1 style="text-align: center; font-size: 16px; color:#26b6d4">
      BRISTOLENERGY
    </h1>
    <h3 style="font-size: 15px">NEW ACCOUNT NOTIFICATION</h3>
  </div>

  <p class="sm-p">
    Dear ${userInfo.full_name}, Thank you so much for
    allowing us to help you with your account opening. We are committed to
    providing our customers with the highest level of service and the most
    innovative investment and trading that are possible. We are very glad you
    chose us. We hope you will take advantage of our wide variety of investment
    and trading which are designed to meet your needs
  </p>
  <p class="sm-p">
   You are ready to start creating investment and making profit. For more detailed informations, please contact our customer support or your
    relationship officer
  </p>
  

 
  <br />
  <h1
    style="
      font-size: 18px;
      text-align: center;
      background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
      color: #26b6d4;
    "
  >
    BRISTOLENERGY.LTD
  </h1>
  <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
    Disclaimer: this message was automatically generated via bristolenergy
    secured channel,please do not reply to this message all correspondence
    should be addressed to bristolenergy.ltd or your relationship officer
  </p>
</div>

 `,
  });
};
module.exports = { create_mail_options, transporter };

transporter.sendMail(
  create_mail_options({
    first_name: "chidera",
    last_name: "Nweke",
    reciever: "chideranwofe02@gmail.com",
  }),
  (err, info) => {
    if (err) return console.log(err.message);
    console.log(info);
    // return res.status(400).json({
    //   error: true,
    //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
    // });
  },
);



















