const admin = require("firebase-admin");
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
const deviceToken = ""
const serviceAccount = {} 
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const message = {
    notification: {
        title: 'Push notifications Test',
        body: 'I like it when you read me.'
    }
};

console.log(`Attempting to send the notification to device.`);

try {
    const _res =  admin.messaging().sendToDevice(registrationToken, message, { priority: 'high' });
    console.log(`Successfully sent the notification to device.`);    
} catch (err) {
    console.log('An error occurred while connecting to Firebase');
    console.log(err.toString());
}
