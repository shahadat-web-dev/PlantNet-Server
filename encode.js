const fs = require('fs');

// এখানে আপনার JSON এর নাম দিন
const key = fs.readFileSync('./plantnet-5d0e2-firebase-adminsdk-fbsvc-70f49f5b98.json', 'utf8');

const base64 = Buffer.from(key).toString('base64');
console.log(base64);
