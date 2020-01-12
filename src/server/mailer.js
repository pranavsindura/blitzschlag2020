const nodemailer = require("nodemailer");

async function main(obj) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'butterKiDukan@gmail.com',
            pass: 'shalu0907'
        }
    });

    let info = await transporter.sendMail({
        from: '"Dhairya" <butterKiDukan@gmail.com>',
        to: obj.email,
        subject: "Mail from Blitz20 developers",
        text: "Its a text",
        html: `<b>You Are Registered with id ${obj.blitzID} </b>`
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
module.exports = {
    main
}