module.exports = {
    _processors: {
      sendEmail: function (job, cb) {
        Mailer.sendThanksMail(job.data);
        sails.log.debug("Email sent at =>" , job.data.email);
        cb();
      },
    },
  };