
module.exports = {
    sendMail: async function () {
        
        const phonenumber = agent.parameter.phonenumber;
        const name = agent.parameter.name;
        const email = agent.parameter.email;
        const mailTitle = agent.parameter.mailTitle;
        const mailDetail = agent.parameter.mailDetail;

        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            aunt: {
                user: 'sample@gmail.com',
                pass: 'password'
            }
        });

        const mailOptions = {
            from: "sample@gmail.com",
            to: "mods.loan.assistant@gmail.com",
            subject: "",
            html: "<p> Name: </p>" + name + "<p> Email: </p>" + email + "<p> Phone Number: </p>" + phonenumber
                + "<p> Title: </p>" + mailTitle + "<p> Description: </p>" + mailDetail
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
        });

        let intentMap = new Map();
        intentMap.set('sendMail', sendMail);
    }
};