const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let embed = new discord.MessageEmbed()
        .setTitle(`Reaction Roles`)
        .setDescription("React to gain the role.")
        .setColor("#ed2a1c")
        .setFooter("Chill Place | Official", "https://i.imgur.com/zSWTyii.jpg")
    let msgEmbed = await message.channel.send(embed)
    msgEmbed.react("✅")


    bot.on("messageReactionAdd", async (reaction, user) => {
    //const player = message.author.username.toLowerCase()
    

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "736550193062871040") {
        if (reaction.emoji.name === `✅`){
            await reaction.message.guild.members.cache.get(user.id).roles.add("736616433504616458")
        }
    }
})

    bot.on("messageReactionRemove", async (reaction, user) => {
    //const player = message.author.username.toLowerCase()
    

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "736550193062871040") {
        if (reaction.emoji.name === `✅`){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("736616433504616458")
        }
    }
})

}

module.exports.help = {
    name: "react"
}