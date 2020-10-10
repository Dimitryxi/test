const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require("ytdl-core");

const PREFIX = ':';

var version = '1.2';

var servers = {};

client.once('ready', () => {
    console.log('Aventure je ONLINE!!');
});


bot.on('messsage', message => {

    Let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'play':
         if(!args[1]){
             message.channel.send("you need to provide a link!");
             return;        
        } 
        
        if(!message.member.voiceChannel){
            message.channel.send("You must be in a channel to play the bot!");
            return;
        }

           



        break;
    }
});

client.login('NzYwOTA3MDI1NDMyNzA3MTEz.X3S34w.ZPYfyyxSH_ko30tYNZQCAiO53e4');


