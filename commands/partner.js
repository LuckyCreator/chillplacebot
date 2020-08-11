const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let PartnerEmbed = new discord.MessageEmbed()
        .setColor("#ed2a1c")
        .setTitle("**Partner**")
        .setDescription("**1**. Je moet 100+ actieve leden hebben.\n**2.** Je moet een professionele Discord hebben.\n**3.** Je moet geen neppe leden hebben.\n**4.** Geen 18+ Discord.")
        .setTimestamp()
        .setFooter("Chill Place | Official", "https://i.imgur.com/zSWTyii.jpg")
    message.channel.send(PartnerEmbed)

}

module.exports.help = {
    name: "partner"
}