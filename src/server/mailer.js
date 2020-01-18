const nodemailer = require("nodemailer");

async function main(obj) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info.blitzschlag@gmail.com',
            pass: 'blitz@schlag$2020'
        }
    });

    let info = await transporter.sendMail({
        from: '"Blitzschlag" <info.blitzschlag@gmail.com>',
        to: obj.email,
        subject: `Registration Confirmed of ${obj.firstName}`,
        text: "Its a text",
        html: `<p>Hello ${obj.firstName} ${obj.lastName}!<p><br><p>Greetings From <b>Blitzschlag'20</b></p><br><p>Your account has been successfully created. Please find your account details below.</p><br><p>Registration ID: blitz20@${obj.blitzID}</p><p>Name: ${obj.firstName}</p><p>Email: ${obj.email}</p><p>Do not share your registration ID and password with anyone. If you are a student outside of MNIT Jaipur, IIIT Kota or NIT UK please complete your payment from the Hospitality section</p><br><br>For payment and accomodation contact us: <br><br><p>Ansh Khandelwal</p><p>+91-8518066443</p><p>Divyaman</p><p>+91-8963052212</p><br><a href="http://blitzschlag.co.in">http://blitzschlag.co.in</a><br><p>**This is an auto generated mail, please do not reply**</p>`
    });

    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

async function eventMail(user, teamID, eventName) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info.blitzschlag@gmail.com',
            pass: 'blitz@schlag$2020'
        }
    });

    let info = await transporter.sendMail({
        from: '"Blitzschlag" <info.blitzschlag@gmail.com>',
        to: user.email,
        subject: `Event Registration Confirmed for ${eventName}`,
        text: "Its a text",
        html: `<p>Hello ${user.firstName}!<p><br><p>Greetings From <b>Blitzschlag'20</b></p><br><p>Your are Registered for - ${eventName}</p><p>Your team ID is - <b>${teamID}</b> </p><br><p>**This is an auto generated mail, please do not reply**</p>`
    });

    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
module.exports = {
    main,
    eventMail
}