'use strict';
//Using DialogFlow-------------------------------------------------
const dialogflow = require('dialogflow');
const uuid = require('uuid');
const config = require('../config/keys');
//Using DialogFlow-------------------------------------------------
// A unique identifier for the given session
const sessionId = uuid.v4();
// new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.projectId, sessionId);

module.exports = {
    textQuery: async function (text, parameters) {
        // The text query request
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent ข้อความที่ client ขอไปยัง bodyparser
                    text: text,
                    // ภาษาที่ใช้
                    languageCode: config.languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            },
        };
        // Send request and log result/detectIntent จะดูว่าเรา requeset อะไร แล้วจะตอบกลับมาตามเงื่อนไข intent นั้น
        let responses = await sessionClient.detectIntent(request);
        return responses;
    },
    //04/07/64---------------------------------------------------------------------------------
    createBooking: async function (text, parameters) {
        // The text query request
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent ข้อความที่ client ขอไปยัง bodyparser
                    text: text,
                    // ภาษาที่ใช้
                    languageCode: config.languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            },
        };
        // Send request and log result/detectIntent จะดูว่าเรา requeset อะไร แล้วจะตอบกลับมาตามเงื่อนไข intent นั้น
        let responses = await sessionClient.detectIntent(request);
        return responses;
    },
    createCalendarEvent: async function (text, parameters) {
        // The text query request
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent ข้อความที่ client ขอไปยัง bodyparser
                    text: text,
                    // ภาษาที่ใช้
                    languageCode: config.languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            },
        };
        // Send request and log result/detectIntent จะดูว่าเรา requeset อะไร แล้วจะตอบกลับมาตามเงื่อนไข intent นั้น
        let responses = await sessionClient.detectIntent(request);
        return responses;
    },
};

// console.log('Detected intent');
// const result = responses[0].queryResult;
// console.log(`Query: ${result.queryText}`);
// console.log(`Response: ${result.fulfillmentText}`);
// if (result.intent) {
//     console.log(`Intent: ${result.intent.displayName}`);
// } else {
//     console.log(`No intent matched.`);
// }