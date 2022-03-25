const Discord = require('discord.js');
const fs = require('fs');
const { checkCommandModule, checkProperties } = require('./checks/check');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const config = require('./config');
const mongoose = require('mongoose')
client.commands = new Discord.Collection()
client.slash = []
client.config = config;


mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if(err) return console.log(err)
    console.log('Done, Connected to mongodb')
})

fs.readdir('./SlashCommands', (err, folders) => {
    if (err) return console.log(err);
    folders.forEach(folder => {
        fs.readdir(`./SlashCommands/${folder}`, (err, files) => {
            if (err) return console.log(err);
            files.forEach(file => {
                let cmdName = file.split('.')[0],
                    cmdModule = require(`./SlashCommands/${folder}/${file}`)
                if (checkCommandModule(cmdName, cmdModule)) {
                    if (checkProperties(cmdName, cmdModule)) {
                        client.slash.push(cmdModule)
                        client.commands.set(cmdModule.name, cmdModule)
                    }
                }
            })
        })
    })
})

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.login(config.token)
