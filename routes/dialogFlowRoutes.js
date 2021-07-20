//const chatbot = require('../chatbot/chatbot');

const { express } = require('actions-on-google/dist/framework/express');

module.exports = (app) => {
  //HTTP Methods
  app.get('/', (req, res) => {
    res.send('Hello thesis again "now working on 20/7/64 9.05 pm"');
  });

  //Home route Webhook connection
  app.post('/', async (req, res) => {
    console.log(req.body, 2, ' ');
    const resname = req.body.queryResult.intent.name.split("/");
    const intentID = resname[resname.length - 1];

    switch (intentID) {
      //test
      case '4723c3a7-3944-4f87-98a3-f729ad1860e5':
        res.send({
          fulfillmentText: 'ABC test: connected'
        });
        break;

      //default
      //fallback intent
      case 'eca6c71b-311e-4c7a-971a-7145cf50e36a':
        res.send();
        break;

      //Intent on my project
      //Location
      case '62e06ac5-9a6a-49df-9214-1867581a2d0d':
        res.send();
        break;

      //contactBooking
      case '42b2a223-daa2-4493-a13c-3a61723710ab':
        const booking = express();
        booking.use(bodyParser.json());
        require('../chatbot/contactBooking')(booking);
        res.send();
        break;
      //contactBooking-yes
        case '6d5ea1b3-a651-4785-81d5-7f8a99268e29':
          res.send();
          break;
      //contactBooking-no
        case 'eca6c71b-311e-4c7a-971a-7145cf50e36a':
          res.send();
          break;

      //sendMail
      case '30618794-147e-4f1c-9812-af06b02f674b':
        const sMail = express();
        sMail.use(bodyParser.json());
        require('../chatbot/contactBooking')(sMail);
        res.send();
        break;
      //sendMail-yes
        case '51f862b9-3352-4966-adba-103bac0782d2':
          res.send();
          break;
      //sendMail-no
        case 'ce9c4541-448b-4aa2-bfbb-e53c3b467aea':
          res.send();
          break;
      
      default://test
        res.send({
          fulfillmentText: 'Webhook test => default'
        });
    }
  });

  app.post('/eventQuery', (req, res) => {
    res.send('Event query')
  });

  // app.put();
  // app.delete();

  // //text query
  // app.post('/textQuery', async (req, res) => {
  //   let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
  //   res.send(responses[0].queryResult)
  // });

  //HTTP Methods-----------------------------------------------------
};

