const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'toplibreriavalencia@gmail.com',
        pass: 'Hola1234'
    } //recordatorio
});
module.exports = transporter;