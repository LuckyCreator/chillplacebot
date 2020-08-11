const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var idee = args.join(` `);
    if(!idee) return message.reply("Geef een idee op.");

    var ideeEmbed = new discord.MessageEmbed()
    .setTitle("**Nieuw Idee**")
    .setColor("#ed2a1c")
    .addField("Idee", idee)
    .addField("Ingezonden door", message.author);
    
    var ideeChannel = message.guild.channels.cache.find(channel => channel.name === "╸ideeën");
    if (!ideeChannel) return message.reply("Helaas heb ik geen idee channel kunnen vinden.");

    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react(`👍`);
        embedMessage.react(`👎`);
    })
    
}

module.exports.help = {
    name: "idee"
}