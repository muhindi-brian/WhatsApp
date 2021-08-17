const wbm = require('wbm'); // Install wbm "npm install wbm"

wbm.start().then(async () => {
    const phones = ['#']; //Add the WhatsApp reciepient PhoneNumber Here.
    const message = 'Good Morning, What are up to This *days*';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));
