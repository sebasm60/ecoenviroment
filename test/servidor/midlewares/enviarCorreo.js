const nodemailer = require('nodemailer');

async function mail(correo, contraseña, identificacion, nombres, apellidos) {
    contentHTML = `
    <h1>Informacion de usuario</h1>
    <ul>
        <li>Nombres: ${nombres}</li>
        <li>Apellidos: ${apellidos}</li>
        <li>Identificacion: ${identificacion}</li>
        <li>Correo: ${correo}</li>
        <li>Contraseña: ${contraseña}</li>  
    </ul>`

    const trasnporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'sebasg1325@hotmail.com',
            pass: '97031410480LOL'
        }
    });

    const info = await trasnporter.sendMail({
        from: "'Gestor de tareas' <sebasg1325@hotmail.com>",
        to: correo,
        subject: "Welcome",
        html: contentHTML
    });
};

module.exports = mail;