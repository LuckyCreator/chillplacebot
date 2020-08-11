const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let logChannel = {
        logChannel: "715290718608031785"
    
    }
    
    if(message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
        message.channel.delete();
        let Embed = new discord.MessageEmbed()
            .setTitle(`Ticket Closed!`)
            .setDescription(`Ticket Name: ${message.channel.name}\n**Gesloten door: <@${message.author.id}>`)
            .setColor(`#eb4034`)
            .setFooter("Chill Place | Official", "https://i.imgur.com/zSWTyii.jpg")
        message.channel.send(Embed);
    }

    if(!message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
        message.guild.send("Sorry maar je hebt hier helaas geen rechten voor.")
    }

}

module.exports.help = {
    name: "close"
}