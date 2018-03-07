//A bot for remot3.it on slack
const { rtmClient, clientEvents } = require('@slack/client');
const token = process.env.SLACK_TOKEN;
const appData = {};
const rtm = new rtmClient(token, {
    dataStore: false,
    useRtmConnect: true,
});
//Ready event
rtm.on(clientEvents.RTM.AUTHENTICATED, (connectData) => {
    appData.selfID = connectData.self.id;
    console.log(`Ready as ${appData.selfID} on team ${connectData.team.id}`);
});
//End ready event
