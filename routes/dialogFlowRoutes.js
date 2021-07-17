const chatbot = require('../chatbot/chatbot');
//const sendMail = require('../chatbot/sendMail');
//const contactBooking = require('../chatbot/contactBooking');

module.exports = (app) => {
  //HTTP Methods-----------------------------------------------------
  app.get('/', (req, res) => {
    res.send('Hello my fk project again "worked on 17/7/64"');
  });

  //16/4/64 Home route
  app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, 2, ' '));
    
    res.send({
      fulfillmentText: 'Hello from my coding. :)'
    });
  });

  // app.post('/webhook', async(req, res) => {
  //   let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
  //     res.send({
  //     fulfillmentText: [responses[0].queryResult]
  //   });
  // });
  

  app.post('/api/mabot_text_query', async(req, res) => {
    let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
    res.send(responses[0].queryResult)
  });
  
  // 14/7/64 --sendMail
  app.post('/api/mabot_send_mail', async(req, res) => {
    let responses = await sendMail.sendMail(req.body.text, req.body.parameters);
    res.send(responses[0].queryResult)
  });

  //04/07/64-----------------------------------------------------  
  // app.post('/api/mabot_create_Booking', async(req, res) => {
  //   let responses = await chatbot.createBooking(req.body.text, req.body.parameters);
  //   res.send(responses[0].queryResult)
  // });
  // app.post('/api/mabot_create_Calendar_Event', async(req, res) => {
  //   let responses = await chatbot.createCalendarEvent(req.body.text, req.body.parameters);
  //   res.send(responses[0].queryResult)
  // });
  //04/07/64-----------------------------------------------------

  app.post('/api/mabot_event_query', (req, res) => {
    res.send('Event query')
  });

  // app.put();
  // app.delete();

  //HTTP Methods-----------------------------------------------------
};

