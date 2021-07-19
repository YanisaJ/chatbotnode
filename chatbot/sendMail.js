
// module.exports = (app) => {
//     function sendMail(){  
        // const phonenumber = agent.parameter.phonenumber;
        // const name = agent.parameter.name;
        // const email = agent.parameter.email;
        // const mailTitle = agent.parameter.mailTitle;
        // const mailDetail = agent.parameter.mailDetail;

        const nodemailer = require("nodemailer");
        
        //sender
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            aunt: {
                user: 'nodemailermla@gmail.com',
                pass: 'ma61161234'
            }
        });

        //receiver
        const mailOptions = {
            from: "nodemailermla@gmail.com",
            to: "mods.loan.assistant@gmail.com",
            subject: "test Sendmail",
            text: "testing success",
            // html: "<p> Name: </p>" + name + "<p> Email: </p>" + email + "<p> Phone Number: </p>" + phonenumber
            //     + "<p> Title: </p>" + mailTitle + "<p> Description: </p>" + mailDetail
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Sent: " + info.response);
        });
        // let intentMap = new Map();
        // intentMap.set('sendMail', sendMail);
//     }
// };