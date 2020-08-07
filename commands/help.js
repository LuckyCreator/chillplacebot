const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let CreatedTicketEmbed = new discord.MessageEmbed()
        .setColor("#ed2a1c")
        .setTitle("**Help**")
        .addField("**__Algemeen__**", "!help - Geeft informatie over commands.\n!idee - Laat een idee achter.\n!avatar - Laat jouw of iemand anders zijn avatar zien.\n!8ball - Stel een vraag en krijg antwoord!\n!sps - Speelt een potje steen papier schaar.")
        .addField("**__Support__**", "!ticket - Maak een ticket aan.\n!close - Sluit een ticket.\n!partner - Zie wat je nodig hebt voor partner.")
        .addField("**__Staff__**", "t")
        .setTimestamp()
        .setFooter("Wessel | Youtube", "https://i.imgur.com/fRVi9vm.jpg")
    message.channel.send(CreatedTicketEmbed)

}

module.exports.help = {
    name: "help"
}