// // all file = 4/7/64 !!!!!!!!!!!!!!!!!
// 'use strict';
// const calendarId = require('../config/keys');
// const serviceAccount = {
//     type: "service_account",
//     project_id: "mod-sloanassistantbot-9dsw",
//     private_key_id: "8e77e048721a70e9d77c475e71f9e70e29af0b4d",
//     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzFx3VUYw8YTiP\n883h81i60HcsKYAw0mVlx0kaSSbTrp4GFHrCH8wPLwY+Zpjg6dFbJqcx/1jCvy11\n53/7OSkqlooLjDoECuWF5x7XVcRd3Og3/BHXLDrWOnPALhqj1pa4rWvXm0Y8gim9\nVURDQiQGIko16/OkLK9UE3FGWv+V77skP0ICuB7j5vx56hkfzjaakXg0LrRN5NOd\nUeWkVgoKq3EE31DbxBHV5Sbpcmc8F14sPEJ4O46P+uwBpA0k9l+8aK+l85avl1vn\nn6bYZb+5Z4RKvgydvGqyqoCKyZBpeaMruX3YegTlN2ebZXsWGzGFIlsAFMS5RNz6\n1S4iL447AgMBAAECggEAEck1RfQ9Wy8Z8PdOS9G2eYcumWIzFaYvj8tvmn6yrnSP\nGRzQ5uqa138yEuHEQ8IKRWUyAah8ZjWaYYqbjpWqCE1pvvqENdaR3kSKhD7uVkFp\nhqCFcmXgH1qFbbamdVMLJk2C16eCHYxHx5fqREu99tCnp3HxgS026cCsj/IwTpw/\n5UcnGKmjlbwvo2FncFzONZcCwDv3z2QScUhfG69CH4KVjoAd9uNPWUSvXFpz/cYr\nm5Rags+nyrKbOv5dmJDC6sPR+6bBWiylt4RXHqILMQqY5ucFEkkrK9qx7lGiTgBo\nOxkfJ+598N4QipI5L8zuXoPs0r7GJTFLeAijYErz0QKBgQDWqZO0CXk6TlCpb0cl\nBMvC9JBQYoqzIHtoGpQ4ogDHfpR6mf9bqMctiknD8E3pRSouO7+F231IafEfyReu\nRL4B5wnK7A8JZDbO71Mwrk57GkJU4Fe4r5zfUg1ataALDJC1mgPN+I0kH4uPDs/o\nlPBrf1i8TtZAaWrpiT3JxCIItwKBgQDVk+gIYfH5xQfjTYM+7Kqqg69iN7FFWiZ0\n+c6FVXeDQfx9SL9R7l5fsmuB+oNtJc3ZyRqqPNhJx4v2vdkLj1bUelpuwBq9CInn\n+mTmsd9KyyB+ag/ZvUNiYRdSa/Pfoakl9vnnvMa0YNLIIsAqWh5j7Hjo+kK0FrXs\nQlzCBR96nQKBgCYxDYJenR7uiBNdJP9FFyucb4Cdx6ePA+XFtNFOoWzc7HXTqEca\nhDVqAS3HN1VlZNfM8YpTPrr/flL1aC0tNdEI1gkwboxxM/8lPVvP506noV2QfIrz\nU6m344BcCBlvJt/ogvzGV/YxVpchP4RV22CEy7jVHfFf0BG0xTV8m8GJAoGAX/e9\n40ZffGPUT4ac2sFtToEtZWyw8wC3FwjIi5EDyq7zzTfK//2j2kxJknYGaBz8ikea\n+7OrXDuV4KEdzdvyoDb6O5mGajpT/TC99gsm0mzDhQoTZTtt8968pARt6KazYqO/\nVymz/4kiLVuwDVfBIBU5nzYUkudBh4+qLmQu6OECgYEAlEjl3QpdtHNflbSDJK89\n6m8VbhQsuQ1CIS8Q6+Kii0KObnls41vUWiioHTMHZe4OAXn6m43fR60wxvKkjdw+\nhcg7ZZCuAQULgocNq7cDWtHsK6C0kG7wtKt5j6j0Q16C2cZHkxSfUSN+ECb+ExLX\n1cOF4c+feNQLwVv/bWyPyJI=\n-----END PRIVATE KEY-----\n",
//     client_email: "appointment-scheduler-bot@mod-sloanassistantbot-9dsw.iam.gserviceaccount.com",
//     client_id: "111146157906596890530",
//     auth_uri: "https://accounts.google.com/o/oauth2/auth",
//     token_uri: "https://oauth2.googleapis.com/token",
//     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//     client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/appointment-scheduler-bot%40mod-sloanassistantbot-9dsw.iam.gserviceaccount.com"
// };

// // ตั้งค่าข้อมูลบัญชี Google Calendar Service
// // const serviceAccountAuth = new google.auth.JWT({
// //     email: serviceAccount.client_email,
// //     key: serviceAccount.private_key,
// //     scopes: 'https://www.googleapis.com/auth/calendar'
// // });

// // const calendar = google.calendar('v5');
// // process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements

// const timeZone = 'Indochina/Bangkok';
// const timeZoneOffset = '+7:00';

// //exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
// module.exports = (app) => {
//     {
//         const agent = new WebhookClient({ request, response });
//         console.log("Parameters", agent.parameters);

//         //Change the parameters to your entity names
//         function createBooking(agent) {
//             const time = new Date(Date.parse(agent.parameters.date.split('T')[0] + 'T' + agent.parameters.time.split('T')[1].split('-')[0] + timeZoneOffset));
//             const dateTimeEnd = new Date(new Date(time).setHours(time.getHours() + 1));
//             const date = new Date(agent.parameters.date);
//             const bookingDate = new Date(date);
//             const name = agent.parameters.name;
//             const studentID = agent.parameters.studentID;
//             const phonenumber = agent.parameters.phonenumber;            
//             const email = agent.parameters.email;
//             var phone = phonenumber.toString().length;
//             var stdID = studentID.toString().length;

//             //bookingDate.setHours(time.getHours()); //This may be the cause why 9pm is registered as the past
//             //bookingDate.setMinutes(time.getMinutes());
            
//             const now = new Date();
//             const appointmentTimeString = time.toLocaleString(
//                 'en-US',
//                 { month: 'long', day: 'numeric', hour: 'numeric', timeZone: 'Indochina/Bangkok' }
//             );

//             if (time < now) {
//                 agent.add(`ไม่สามารถเข้าพบเวลาที่ระบุได้นะครับ กรุณาทำรายการใหม่ตรับ`);
//             }else if (date < now) {
//                 agent.add(`ไม่สามารถเข้าพบวันที่ระบุได้นะครับ กรุณาทำรายการใหม่ครับ`);
//             }
//             else if (bookingDate.getFullYear() > now.getFullYear()) {
//                 agent.add(`ไม่สามารถนัดพบเวลา${bookingDate.getFullYear()}ได้ครับ โปรดระบุเวลาอีกครังครับ${now.getFullYear()}`);
//             }
//             else if (phone != 10) {
//                 agent.add(`โปรดระบุหมายเลขโทรศัพท์ให้ครบทั้งสิบหลักด้วยครับ`);
//             }else if (stdID != 11) {
//                 agent.add(`โปรดระบุรหัสนักศึกษาให้ครบทั้งสิบเอ็ดหลักด้วยครับ`);
//             }

//              else {
//                 // Check the availibility of the time, and make an appointment if there is time on the calendar
//                 return createCalendarEvent(time, dateTimeEnd, bookingDate, name, studentID,phonenumber, email).then(() => {
//                     agent.add(`การนัดหมายเสร็จสิ้น ขอให้$name เข้าพบ ${appointmentTimeString} ที่ห้องกองทุน @ตึก14ชั้น:6A ตามที่นัดหมายไว้ \n`,`หากมีข้อเปลี่ยนแปลงประการใดทางเราจะติดต่อกลับไปนะครับผม`);
//                 }).catch(() => {
//                     agent.add(`ขออภัยในความไม่สะดวกนะครับ ไม่สามารถทำการนัดหมายได้ โปรดทำรายการใหม่อีกครั้งครับ ${appointmentTimeString}`);
//                 });
//             }
//         }
//         //Intent Map
//         let intentMap = new Map();
//         intentMap.set('contactBooking', createBooking);
//         intentMap.set('contactBooking', getContact);
//         agent.handleRequest(intentMap);
    
//     //});
//     }

//     function createCalendarEvent(time, dateTimeEnd, bookingDate, name, studentID,phonenumber, email) {
//         return new Promise((resolve, reject) => {
//             calendar.events.list({
//                 auth: serviceAccountAuth, // List events for time period
//                 calendarId: calendarId,
//                 timeMin: time.toISOString(),
//                 timeMax: dateTimeEnd.toISOString()
//             }, (err, calendarResponse) => {
//                 // Check if there is a event already on the Calendar (use this event to make sure reservations can fit up to 100 guests)
//                 if (err || calendarResponse.data.items.length > 0) {
//                     reject(err || new Error('เวลาที่ขอขัดแย้งกับการนัดหมายอื่น โปรดทำรายการใหม่อีกครั้งครับ'));
//                 } else {
//                     // Create event for the requested time period
//                     calendar.events.insert({
//                         auth: serviceAccountAuth,
//                         calendarId: calendarId,
//                         resource: {
//                             summary: 'นัดหมายเข้าพบ:' + bookingDate + ', สำหรับ: ' ,description: bookingDate + ' Name: ' + name + 
//                                         ' รหัสนักศึกษา: ' + studentID + ', PhoneNumber: ' + phonenumber + ', Email: ' + email,
//                             start: { dateTime: time },
//                             end: { dateTime: dateTimeEnd },
//                             attendees: { email: email }
//                         }
//                     }
//                     );
//                 }
//             });
//         });
//     }
// }
// // all file = 4/7/64 !!!!!!!!!!!!!!!!!