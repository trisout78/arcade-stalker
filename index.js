const Discord = require('discord.js');
const client = new Discord.Client();

const channelId = '1211267248669458432'; 
const userId = '827232338039144518'; 

const offlineMessages = ['Arcade vient de deco 😭. Surement pour faire du renforcement musculaire ', 'Arcade vient de deco 😭! Il a surement oublié que discord était sur son navigateur internet', 'Arcade vient de deco 😭! Son modem 56k a crash', 'Arcade vient de deco 😭! Il a lancé 2 minecraft sur son ordi et il a tout fait crash', 'Arcade vient deco 😭! Il a oublié de faire ses devoirs.'];
const onlineMessages = ['ARCADE VIENT DE SE CONNECTER !!! ALLEZ LE SPAMMMMMMMMMMMMMMMMM MAINTENANT', 'Arcade vient de se co! Il a rallumé son modem 56k', 'Arcade vient de se co ! Il a fallit oublié Etercube !', 'Arcade vient de se co ! Il vient surement de se faire quitter', 'Arcade vient de se co ! Il vient de déclarer Etercube au Gabon.'];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = client.channels.cache.get(channelId);
    channel.send('Je viens de démarrer ! Je suis prêt à stalker Arcade !');
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


client.login('token'); 
