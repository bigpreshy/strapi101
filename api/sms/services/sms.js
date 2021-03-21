 let sendSms = function(){
  const accountSid = process.env.TWILIO_ACCOUNT_SID ;
  const authToken = process.env.TWILIO_AUTH_TOKEN  ;
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: 'Hello Admin, someone just posted a comment',
       from: '+16463743689', //the phone number provided by Twillio
       to: '+2349038732020' // your own phone number
     })
    .then(message => console.log(message.sid));

 }
 
module.exports = {
  sendSms
};
