import { Attachment} from 'botbuilder';

export class TripPlanner {

    trip;

    getAttachment() {
        return {
            contentType: "application/vnd.microsoft.card.adaptive",
            content: {
                type: "AdaptiveCard",
                speak: "This is your trip",
                body: [
                    {
                        "type": "TextBlock",
                        "text": "Kliv på fort som faen!"
    
                    }
                ]
            }
        };
    }


}