module.exports.sendThanksMail = function(obj) {
  sails.hooks.email.send(
    'thanksEmail', 
    {
      Sentence: obj.sentence
    },
    {
      to: obj.email,
      subject: 'Thank you !'
    },
    function(err) {console.log(err || 'Mail Sent!');}
  )
}