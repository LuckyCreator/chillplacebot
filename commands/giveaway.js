const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

    if (!args[0]) return message.channel.send(`Je moet de tijd aangeven.!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Dit is geen tijdoptie. Kies uit: **d - h - m**`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Dit is geen tijd.!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Ik kan geen kanaal vinden.`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Geen prijs opgegeven.!`);
    message.channel.send(`*Giveaway aangemaakt in ${channel}*`);
    let Embed = new discord.MessageEmbed()
      .setTitle(`🎉 **GIVEAWAY** 🎉`)
      .setDescription(
        `**Prijs:** ${prize} \n ** ** \n**Eindigt:**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Niet genoeg mensen hebben gereageerd om een winnaar te kunnen kiezen.`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `De winnaar van **${prize}** is geworden **${winner}**`
      );
    }, ms(args[0]));
  },

module.exports.help = {
    name: "giveaway"
}