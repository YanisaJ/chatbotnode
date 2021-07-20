module.exports = (sMail) => {
    sMail.get('/sMail', (req, res) => {
        res.send('Hello bot "now working on sendMail"');
    });

    sMail.post('/sendMail', async (req, res) => (function sendMail(phonenumber,name,email,mailTitle,mailDetail) {
        const phonenumber = agent.parameter.phonenumber;
        const name = agent.parameter.name;
        const email = agent.parameter.email;
        const mailTitle = agent.parameter.mailTitle;
        const mailDetail = agent.parameter.mailDetail;
        
        require('dotenv').config();
        const nodemailer = require("nodemailer");

        //sender
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            aunt: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        //receiver
        let mailOptions = {
            from: 'nodemailermla@gmail.com',
            to: 'mods.loan.assistant@gmail.com',
            subject: 'test Sendmail',
            // text: 'testing success',
            html: "<p> Name: </p>" + name + "<p> Email: </p>" + email + "<p> Phone Number: </p>" + phonenumber
                + "<p> Title: </p>" + mailTitle + "<p> Description: </p>" + mailDetail
        };

        //option
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('Sent Mail!!!!!!' + info.response);
            }
            // if (err) {
            //     console.log(err);
            //     return;
            // }
            // console.log("Sent: " + info.response);
        });
        let intentMap = new Map();
        intentMap.set('sendMail', sendMail);
    }
    )
    )
};


