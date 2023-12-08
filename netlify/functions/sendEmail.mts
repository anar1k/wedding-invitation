/*const nodemailer = require('nodemailer');*/

exports.handler = async function(/*event, context*/) {
/*    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aanar1k14america@gmail.com',
            pass: 'ptjk snmc hear goal'
        }
    });

    // Определяем содержимое email
    const mailOptions = {
        from: 'aanar1k14america@gmail.com',
        to: 'killer56514@gmail.com',
        subject: 'New Form Submission',
        text: `eto text`
    };

    // Отправляем email
    await transporter.sendMail(mailOptions);*/

    return {
        statusCode: 200,
        body: 'Email sent successfully'
    };
};
