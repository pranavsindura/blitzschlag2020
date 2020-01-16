const nodemailer = require("nodemailer");

async function main(obj) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'butterkidukan@gmail.com',
            pass: 'shalu0907'
        }
    });

    let info = await transporter.sendMail({
        from: '"Dhairya" <butterkidukan@gmail.com>',
        to: obj.email,
        subject: `Registration Confirmed of ${obj.firstName}`,
        text: "Its a text",
        html: `<b>You Are Registered with id ${obj.blitzID} </b>`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

async function eventMail(user, teamID, eventName) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'butterkidukan@gmail.com',
            pass: 'shalu0907'
        }
    });

    let info = await transporter.sendMail({
        from: '"Dhairya" <butterkidukan@gmail.com>',
        to: user.email,
        subject: `Event Registration Confirmed for ${eventName}`,
        text: "Its a text",
        html: `<b>You Are Registered with team id ${teamID} </b>`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
module.exports = {
    main,
    eventMail
}
