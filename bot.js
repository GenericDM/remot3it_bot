//A bot for remot3.it on slack
const { rtmClient, clientEvents } = require('@slack/client');
const token = process.env.SLACK_TOKEN;
const appData = {};
var remoteitSettings = {
    "async": true,
    "crossdomain": true,
    "url": "https://api.remot3.it/apv/v23.5/user/login",
    "method": "POST",
    "headers": {
        "developerkey": "",
        "content-type": "application/json",
        "cache-control": "no-cache:"
    },
    "processData": false,
    "data": "{ \"username\" : \"username\", \"password\" }"
}
const bot = new rtmClient(token, {
    dataStore: false,
    useRtmConnect: true,
});
const web = new WebClient(token)

bot.on(clientEvents.rtm.authenticated, (connectData) => {
    appData.selfID = connectData.self.id;
    console.log(`Ready as ${appData.selfID} on team ${connectData.team.id}`);
});

bot.on(clientEvents.RTM.RTM_CONNECTION,OPENED, () => {
    console.log(`Ready`);
});

bot.start();

