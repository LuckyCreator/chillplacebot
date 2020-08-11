const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let CreatedTicketEmbed = new discord.MessageEmbed()
        .setColor("#ed2a1c")
        .setTitle("**Help**")
        .addField("**__Algemeen__**", "!help - Geeft informatie over commands.\n!idee - Laat een idee achter.\n!avatar - Laat jouw of iemand anders zijn avatar zien.\n!8ball - Stel een vraag en krijg antwoord!\n!sps - Speelt een potje steen papier schaar.")
        .addField("**__Support__**", "!ticket - Maak een ticket aan.\n!close - Sluit een ticket.\n!partner - Zie wat je nodig hebt voor partner.")
        .addField("**__Staff__**", "!clear - Verwijderd een aantal berichten\n!react - Maak een bericht aan waarmee je een rol krijgt.\n!say - Laat de bot een bericht zeggen.\n!close - Sluit een ticket.")
        .setTimestamp()
        .setFooter("Chill Place | Official", "https://i.imgur.com/zSWTyii.jpg")
    message.channel.send(CreatedTicketEmbed)

}

module.exports.help = {
    name: "help"
}