const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission(`MANNAGE_MESSAGES`)) return message.reply("Sorry maar jij mag dit helaas niet doen.");

    if(!args[0]) return message.reply("Voer een aantal in.");

    if(Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Ben je dom ofzo. Ik kan toch geen 0 berichten verwijderen pannenkoek.").then(msg => msg.delete({ timeout: 3000}));
            }else if (args[0] == 1) {
                message.reply("Hoppa, ik heb 1 bericht voor je opgegeten!").then(msg => msg.delete({ timeout: 3000}));
            }else {
                message.reply(`Hoppa, ik heb ${amount} berichten voor je opgegeten!`).then(msg => msg.delete({ timeout: 3000}));
            }

        })

    }else{
        return message.reply("Voer een aantal in.")
    }

}

module.exports.help = {
    name: "clearchat"
}