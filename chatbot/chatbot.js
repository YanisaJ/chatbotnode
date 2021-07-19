// //Using DialogFlow------------------------------------------------- 
'use strict';
const dialogflow = require('dialogflow');
const uuid = require('uuid');
const config = require('../config/keys');

// A unique identifier for the given session
const sessionId = uuid.v4();
// new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.projectId, sessionId);

// const fs = require('fs');
// const contactBooking = require('./contactBooking');

// //xxx xxxxxxxxxxxxx-------------------------------------------------


// module.exports = {
//     textQuery: async function (text, parameters) {
//         // The text query request
//         const request = {
//             session: sessionPath,
//             queryInput: {
//                 text: {
//                     // The query to send to the dialogflow agent ข้อความที่ client ขอไปยัง bodyparser
//                     text: text,
//                     // ภาษาที่ใช้
//                     languageCode: config.languageCode,
//                 },
//             },
//             queryParams: {
//                 payload: {
//                     data: parameters
//                 }
//             },
//         };
//         // detectIntent จะดูว่าเรา requeset อะไร แล้วจะตอบกลับมาตามเงื่อนไข intent นั้น
//         let responses = await sessionClient.detectIntent(request);
//         return responses;
//     },
//     // contactBooking: async function (req, res) {
//     //     fs.readFile('contactBooking.js', function (err, data) {
//     //          return true();
//     //     };

//     //     res.send(responses[0].queryResult);
//     // },
//     // sendMail: async function () {
//     // },
//     //     
// };

// //ไม่ใช้
// // console.log('Detected intent');
// // const result = responses[0].queryResult;
// // console.log(`Query: ${result.queryText}`);
// // console.log(`Response: ${result.fulfillmentText}`);
// // if (result.intent) {
// //     console.log(`Intent: ${result.intent.displayName}`);
// // } else {
// //     console.log(`No intent matched.`);
// // }