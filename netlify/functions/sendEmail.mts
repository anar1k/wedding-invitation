import nodemailer from "nodemailer"

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

    let text: string = `Приглашение ${ accept ? 'принято' : 'отклонено' }.\nОтправил/и: ${ guests }\n`;
    const subject: string = text;

    if (accept) {
        text += `Будет/ут пить: ${ typeDrink }\n`;
    }

    if (anotherDrink) {
        text += `Другие напитки: ${ anotherDrink ? anotherDrink : '' }`
    }

    // Определяем содержимое email
    const mailOptions = {
        from: myEmail,
        to: myEmail,
        subject: subject,
        text
    };

    // Отправляем email
    await transporter.sendMail(mailOptions);

    return new Response('Успешно подтверждено, спасибо!')
};
