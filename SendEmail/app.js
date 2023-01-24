const sgmail = require('@sendgrid/mail')

const API_KEY = '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'

sgmail.setApiKey(API_KEY)

const acceptedmessage = {
    to:'{{email}}',
    from:'kalukaputa78@gmail.com',
    subject: 'Order status',
    text: `Your order is being Processed, Will let you know when its ready. Thank you!`,
};

sgmail.send(acceptedmessage)
.then(respone => console.log('Email sent..'))
.catch(error => console.log(error.message))

const rejectmessage = {
    to:'{{email}}',
    from:'kalukaputa78@gmail.com',
    subject: 'Order status',
    text: `Your order has been rejected. Because we have no stocks Sorry for the inconvenience. `,
};

sgmail.send(rejectmessage)
.then(respone => console.log('Email sent..'))
.catch(error => console.log(error.message))

const Readymessage = {
    to:'{{email}}',
    from:'kalukaputa78@gmail.com',
    subject: 'Order status',
    text: `Your order is ready to pick up.Thank you! `,
};

sgmail.send(readymessage)
.then(respone => console.log('Email sent..'))
.catch(error => console.log(error.message))
