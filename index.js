const Discord = require('discord.js');
const client = new Discord.Client();

const channelId = '1211267248669458432'; 
const userId = '827232338039144518'; 

const offlineMessages = ['Arcade viens de deco 😭. Surement pour faire du renforcement musculaire ', 'Arcade viens de deco 😭! Il a surement oublié que discord était sur son navigateur internet ⚡', 'Arcade viens de deco 😭! Son modem 56k a crash', 'Arcade viens de deco 😭! Il a lancé 2 minecraft sur son ordi et il a tout fait crash', 'Arcade a deco 😭! Il a oublié de faire ses devoirs.'];
const onlineMessages = ['ARCADE VIENS DE SE CONNECTER !!! ALLEZ LE SPAMMMMMMMMMMMMMMMMM MAINTENANT', 'Arcade viens de se co! Il a rallumé son modem 56k', 'Arcade viens de se co ! Il a fallit oublié Etercube !', 'Arcade viens de se co ! Il viens surement de se faire quitter', 'Arcade viens de se co ! Il viens de déclarer Etercube au Gabon.'];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
    if (newPresence.userID === userId) {
        const channel = client.channels.cache.get(channelId);
        if (channel) {
            if (newPresence.status !== 'offline') {
                const randomIndex = Math.floor(Math.random() * onlineMessages.length);
                const message = onlineMessages[randomIndex];
                channel.send(message);
            } else {
                const randomIndex = Math.floor(Math.random() * offlineMessages.length);
                const message = offlineMessages[randomIndex];
                channel.send(message);
            }
        }
    }
});
process.on('uncaughtException', function (err) {
    console.log(err);
});


client.login('MTIxMDk1OTc2MTc4NTQ5MTQ4Ng.GoB99V.LMMlJzL6rWLGaw2MBy8CJsdFIDPVNEViuI1olQ'); 
