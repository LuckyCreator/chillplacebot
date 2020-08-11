const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {

    let question = message.content.slice(botConfig.prefix.length + 6);
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = ["Ja", "Nee", "Zekerweten", "Absoluut", "100% niet"];
      let response = responses[Math.floor(Math.random() * responses.length)];
      let Embed = new discord.MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Je vraag: ${question}\nAntwoord: ${response}`)
        .setColor(`#ed2a1c`)
        .setFooter("Chill Place | Official", "https://i.imgur.com/zSWTyii.jpg")
      message.channel.send(Embed);
    }
  }

module.exports.help = {
    name: "8ball"
}