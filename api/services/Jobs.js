module.exports = {
    _processors: {
      sendEmail: function (job, cb) {
        sails.log.info("Email sent at =>" , job.data.email);
        cb();
      },
    },
  };