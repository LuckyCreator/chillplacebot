
const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Ik kon helaas geen files vinden.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen.`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.login(process.env.token);

client.on("ready", async () => {

    let myGuild = client.guilds.cache.get(`714821162366009424`);
    let memberCount = myGuild.memberCount;

    client.user.setActivity(memberCount + ` leden!`, {type: "WATCHING"});

    console.log(`${client.user.username} is online!`)

});

let countChannel = {
    member: "742690392113152000",
    serverID: "714821162366009424"

}

client.on("guildMemberAdd", member =>{

    client.user.setActivity(member.guild.memberCount + ` leden!`, {type: "WATCHING"});
    client.channels.cache.get(countChannel.member).setName(`╸Leden ${member.guild.memberCount}`);

    const channel = member.guild.channels.cache.find(channel => channel.name === "╸welkom");
    if(!channel) console.log("Heb geen welkomskanaal kunnen vinden.");

    var joinEmbed = new discord.MessageEmbed()
            .setColor("#ed2a1c")
            .addField(`Welkom, ${member.user.username} 🎉`, "Welkom op de **Wessel | YouTube** discord server.\n \n")
            .addField(`**Informatie:**`, `• Youtube: WESSEL\n• Soon.\n \nEr zitten momenteel **${member.guild.memberCount}** in de discord`)
            .setImage(`https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif`)
            .setTimestamp()
            .setFooter("Wessel | Youtube")
            .setThumbnail(member.user.displayAvatarURL());
    channel.send(joinEmbed);

});

client.on("guildMemberRemove", member =>{

    client.user.setActivity(member.guild.memberCount + ` leden!`, {type: "WATCHING"});
    client.channels.cache.get(countChannel.member).setName(`╸Leden ${member.guild.memberCount}`);

});


client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client,message, args);

});
