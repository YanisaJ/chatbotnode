const chatbot = require('../chatbot/chatbot');
//const contactBooking = require('../chatbot/contactBooking');

module.exports = (app) => {
  //HTTP Methods-----------------------------------------------------
  app.get('/', (req, res) => {
    res.send('Hello new project again "It is still okay right now at 14/7/64"');
  });

  app.post('/api/mabot_text_query', async(req, res) => {
    let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
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

