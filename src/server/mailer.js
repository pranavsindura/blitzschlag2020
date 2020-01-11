const nodemailer = require("nodemailer");

async function main() {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'butterKiDukan@gmail.com',
            pass: 'shalu0907'
        }
    });

    let info = await transporter.sendMail({
        from: '"Papa" <butterKiDukan@gmail.com>',
        to: "2018kucp1003@iiitkota.ac.in, 2018kucp1001@iiitkota.ac.in, 2018kucp1101@iiitkota.ac.in, 2018kucp1118@iiitkota.ac.in, 2018kucp1117@iiitkota.ac.in",
        subject: "Kya aap sex krna chahoge??",
        text: "Its a text",
        html: "<b>Go to</b><a href='www.xvideos2.com'>Click here</a>"
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
module.exports = {
    main
}