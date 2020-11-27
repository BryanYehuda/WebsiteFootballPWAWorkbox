var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BGuFovLk-PEOCnx1Q1PKhwZc86aaVSIhopcSfr_ycvc6irGqAv-31EIofflb2yz6gpZaTWxVNoZtKDfvninu8Xc",
   "privateKey": "WwZaE8H_sKndMbsr4QYR0RJ5LhSngC2IDj3ogJymDvI"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/fux_DviBfak:APA91bFWQ13k67PpvwyS49bRytSZw-NAfDLYvpZKI6AxCd-LqbRwoqthd8ytEfaMZBGHB30p54ihtJzWwovqc9MvlDwU-eURhC5KdoWE_jUmlKKy_5UGzXxwVyiWi3mN98uZZ_F0eAQK",
   "keys": {
       "p256dh": "BLOrMdKk/Hm4sOXZorjZpKM7UXT7QNWBs5qDhBkpcZ6Plyy9LopcPWioEEAh58OyjgPGjtQvHNL45DF/RDgrAMU=",
       "auth": "e9uPIb5O8Ru2zh0eGZdJdQ=="
   }
};
var payload = 'Welcome to Football Watch!';
 
var options = {
   gcmAPIKey: '411668443247',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);