const { MessageEmbed} = require('discord.js');

module.exports.run = async(bot, message, args) => {

    let Embed = new MessageEmbed()
        let roles = []
        if(!message.mentions.users.first()) {
            Embed.setTitle('**Jouw Avatar**');
            Embed.setImage(message.author.displayAvatarURL());
            Embed.setColor("#ed2a1c");
            return message.channel.send(Embed);
        }else{
            let User = message.mentions.members.first();
            Embed.setTitle(`**${bot.users.cache.get(User.id).tag}'s Avatar**`);
            Embed.setImage(bot.users.cache.get(User.id).displayAvatarURL());
            Embed.setColor("#ed2a1c");
            return message.channel.send(Embed);
        }

}

module.exports.help = {
    name: "avatar"
}