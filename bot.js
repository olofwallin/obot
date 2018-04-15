'use strict';
const builder = require('botbuilder');
var mockSlPlan = require('./mock-slplan.js');


const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
}); 

var bot = module.exports = new builder.UniversalBot(connector, function (session) {
    session.send("Hello there, and welcome to the first OBot!");
});

bot.dialog('resa', function(session) {
    var msg = new builder.Message(session);
    var trip = mockSlPlan;
    
    msg.addAttachment({
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
            type: "AdaptiveCard",
            speak: "This is your trip",
            body: [
                {
                    "type": "TextBlock",
                    "text": trip.TripList.Trip[0].LegList.Leg.name
                            + " from "
                            + trip.TripList.Trip[0].LegList.Leg.Origin.name
                            + " to "
                            + trip.TripList.Trip[0].LegList.Leg.Destination.name
                            + " leaves at "
                            + trip.TripList.Trip[0].LegList.Leg.Origin.time
                            + " and takes "
                            + trip.TripList.Trip[0].dur
                            + " minutes"
                }
            ]
        }
    })

    session.send(msg).endDialog();
}).triggerAction({ matches: /^resa/ });
