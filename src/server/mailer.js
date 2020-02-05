const nodemailer = require("nodemailer");

async function main(obj) {

    if (Number(obj.blitzID) % 2 === 0) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info.blitzschlag20@gmail.com',
                pass: 'CACS_ki_jai_ho@69'
            }
        });

        let info = await transporter.sendMail({
            from: '"Blitzschlag" <info.blitzschlag20@gmail.com>',
            to: obj.email,
            subject: `Registration Confirmed of ${obj.firstName}`,
            text: "Its a text",
            html: `<p>Hello ${obj.firstName} ${obj.lastName}!<p><br><p>Greetings From <b>Blitzschlag'20</b></p><br><p>Your account has been successfully created. Please find your account details below.</p><br><p>Registration ID: blitz20@${obj.blitzID}</p><p>Name: ${obj.firstName}</p><p>Pin: ${obj.blitzPIN}</p><p>Email: ${obj.email}</p><p>Do not share your registration ID and password with anyone. If you are a student outside of MNIT Jaipur, IIIT Kota or NIT UK please complete your payment from the Hospitality section</p><br><br>For payment and accomodation contact: <br><br><p>Ansh Khandelwal</p><p>+91-8518066443</p><p>Divyaman</p><p>+91-8963052212</p><br><a href="http://blitzschlag.co.in">http://blitzschlag.co.in</a><br><p>**This is an auto generated mail, please do not reply**</p>`
        });
    } else {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info.blitzschlag2020@gmail.com',
                pass: 'content_change_nahi_hoga'
            }
        });

        let info = await transporter.sendMail({
            from: '"Blitzschlag" <info.blitzschlag2020@gmail.com>',
            to: obj.email,
            subject: `Registration Confirmed of ${obj.firstName}`,
            text: "Its a text",
            html: `<p>Hello ${obj.firstName} ${obj.lastName}!<p><br><p>Greetings From <b>Blitzschlag'20</b></p><br><p>Your account has been successfully created. Please find your account details below.</p><br><p>Registration ID: blitz20@${obj.blitzID}</p><p>Name: ${obj.firstName}</p><p>Pin: ${obj.blitzPIN}</p><p>Email: ${obj.email}</p><p>Do not share your registration ID and password with anyone. If you are a student outside of MNIT Jaipur, IIIT Kota or NIT UK please complete your payment from the Hospitality section</p><br><br>For payment and accomodation contact: <br><br><p>Ansh Khandelwal</p><p>+91-8518066443</p><p>Divyaman</p><p>+91-8963052212</p><br><a href="http://blitzschlag.co.in">http://blitzschlag.co.in</a><br><p>**This is an auto generated mail, please do not reply**</p>`
        });
    }

    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

async function eventMail(user, teamID, eventName) {

    if (Number(teamID) % 2 === 0) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info.blitzschlagmnit@gmail.com',
                pass: 'landslelomela@mnit'
            }
        });

        let info = await transporter.sendMail({
            from: '"Blitzschlag" <info.blitzschlagmnit@gmail.com>',
            to: user.email,
            subject: `Event Registration Confirmed for ${eventName}`,
            text: "Its a text",
            html: `<p>Hello ${user.firstName}!<p><br><p>Greetings From <b>Blitzschlag'20</b></p><br><p>Your are Registered for - ${eventName}</p><p>Your team ID is - <b>${teamID}</b> </p><p><b>If you are a student outside of MNIT Jaipur, IIIT Kota or NIT UK please complete your payment from the Hospitality section</b></p><br><p>**This is an auto generated mail, please do not reply**</p>`
        });
    } else {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'noreply.blitzschlag@gmail.com',
                pass: 'kichulovevit'
            }
        });

        let info = await transporter.sendMail({
            from: '"Blitzschlag" <noreply.blitzschlag@gmail.com>',
            to: user.email,
            subject: `Event Registration Confirmed for ${eventName}`,
            text: "Its a text",
            html: `<p>Hello ${user.firstName}!<p><br><p>Greetings From <b>Blitzschlag'20</b></p><br><p>Your are Registered for - ${eventName}</p><p>Your team ID is - <b>${teamID}</b> </p><p><b>If you are a student outside of MNIT Jaipur, IIIT Kota or NIT UK please complete your payment from the Hospitality section</b></p><br><p>**This is an auto generated mail, please do not reply**</p>`
        });
    }



    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
module.exports = {
    main,
    eventMail
}