const tmi = require("tmi.js");
const options = require("./option"); //Your options file

//Connect to twitch server
const client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){
    if(self) return;
    if(message === "!test"){
        client.say("Juanjomcw", "Hey esto es una prueba moondaHYPE")
    }
});

client.on('chat', function(channel, user, message, self){
    if(self) return;
    if(message === "hola"){
        client.say("Juanjomcw", "hola @" + user.username + " moondaHYPE")
    }
});

client.on('chat', function(channel, user, message, self){
    if(self) return;
    setInterval( () => {
        client.say("Juanjomcw", "!discord")
    }, 600000);
});

