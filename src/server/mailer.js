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
        html: `<p>Hello <b>${obj.firstName}</b><p><br><br><p>Greetings From <b>Blitzschlag'20</b></p><br><br><p>Your account has been successfully created. Please find your account details below</p><br><br><p>You Are Registered with id blitz20@<b>${obj.blitzID}</b></p><br><br><p>Name: ${obj.firstName}</p><br><p>Email: ${obj.email}</p><br><p>Registration ID: blitz20@${obj.blitzID}</p><br><br><p>Please don't share your registration ID and password with anyone. If you are a student outside MNIT Jaipur, IIIT Kota, NIT UK please complete your payment</p><br><br>For payment and accomodation contact us: <br><br><p>Ansh Khandelwal</p><br><p>8518066443</p><br><br><p>Divyaman</p><br><p>8963052212</p><br><br><br><p>**This is auto generated mail, please do not reply**</p>`
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
        html: `<p>Hello <b>${user.firstName}</b><p><br><br><p>Greetings From <b>Blitzschlag'20</b></p><br><br><p>Your are Registered for - ${eventName}</p><br><br><p>Your team ID is - <b>${teamID}</b> </p><br><br><p>**This is auto generated mail, please do not reply**</p>`
    });

    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
module.exports = {
    main,
    eventMail
}