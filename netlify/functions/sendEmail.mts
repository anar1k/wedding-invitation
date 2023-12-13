const nodemailer = require('nodemailer');

interface IBody {
    guests: string,
    accept: boolean,
    typeDrink: string,
    anotherDrink: string
}

export default async (event: Request) => {
    const body: IBody = await event.json();

    if (!body) {
        return new Error('Возникла ошибка!');
    }

    const {
        guests,
        accept,
        typeDrink,
        anotherDrink
    } = body;

    const myEmail: string = 'aanar1k14wedding@gmail.com';

    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: 'tgop qjqy bzfr xpnm'
        }
    });

    let text: string;

    if (!accept) {
        text = `Приглашение ${ accept ? 'принято' : 'отклонено' }.\nОтправил/и: ${ guests }`;
    } else {
        text = `Приглашение ${ accept ? 'принято' : 'отклонено' }\nОтправил/и: ${ guests }\nБудет/ут пить: ${ typeDrink }\nДругие напитки: ${ anotherDrink ? anotherDrink : '' }`;
    }

    // Определяем содержимое email
    const mailOptions = {
        from: myEmail,
        to: myEmail,
        subject: `Приглашение ${ accept ? 'принято' : 'отклонено' } `,
        text
    };

    // Отправляем email
    await transporter.sendMail(mailOptions);

    return new Response('Успешно подтверждено, спасибо!')
};
