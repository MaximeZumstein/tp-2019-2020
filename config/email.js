module.exports.email = {
    service: "Mailgun",
    auth: {
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASSWORD
    },
    templateDir: "api/emailTemplates",
    from: process.env.MAIL_FROM,
    testMode: false,
    ssl: true
   }