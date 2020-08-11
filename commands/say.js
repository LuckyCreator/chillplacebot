const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(`MANAGE_CHANNELS`)) return message.channel.send("Sorry maar jij mag dit helaas niet doen.")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        let sayEmbed = new discord.MessageEmbed()
            .setColor("#ed2a1c")
            .setTitle("**MELDING**")
            .setDescription(argsresult)
            .setTimestamp()
            .setFooter("Chill Place | Official", "https://i.imgur.com/zSWTyii.jpg")
        mChannel.send(sayEmbed)
        //mChannel.send(argsresult)
    }else {
        argsresult = args.join(" ")
        let sayEmbed = new discord.MessageEmbed()
            .setColor("#ed2a1c")
            .setTitle("**MELDING**")
            .setDescription(argsresult)
            .setTimestamp()
            .setFooter("Chill Place | Official", "https://i.imgur.com/zSWTyii.jpg")
        message.channel.send(sayEmbed)
        //message.channel.send(argsresult)
    }

}

module.exports.help = {
    name: "say"
}