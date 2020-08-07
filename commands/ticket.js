
const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let VragenCategory = message.guild.channels.cache.find(category => category.name === "Vragen");
    let PartnerCategory = message.guild.channels.cache.find(category => category.name === "Partner");
    let SollicitatieCategory = message.guild.channels.cache.find(category => category.name === "Sollicitatie");
    let OverigCategory = message.guild.channels.cache.find(category => category.name === "Sponsor|Donatie");

    if(message.guild.me.hasPermission(`MANAGE_CHANNELS`) && !VragenCategory) {
        SupportCategory = await message.guild.channels.create(`Vragen`, {
            type: "category",
        });
    };
    if(message.guild.me.hasPermission(`MANAGE_CHANNELS`) && !PartnerCategory) {
        PartnerCategory = await message.guild.channels.create(`Partner`, {
            type: "category",
        });
    };
    if(message.guild.me.hasPermission(`MANAGE_CHANNELS`) && !SollicitatieCategory) {
        SollicitatieCategory = await message.guild.channels.create(`Sollicitatie`, {
            type: "category",
        });
    };
    if(message.guild.me.hasPermission(`MANAGE_CHANNELS`) && !OverigCategory) {
        OverigCategory = await message.guild.channels.create(`Sponsor|Donatie`, {
            type: "category",
        });
    };

    if(!message.guild.me.hasPermission(`MANAGE_CHANNELS`) && !SupportCategory) {
        message.channel.send("Sorry maar je hebt hier helaas geen rechten voor.")
    }
    if(!message.guild.me.hasPermission(`MANAGE_CHANNELS`) && !PartnerCategory) {
        message.channel.send("Sorry maar je hebt hier helaas geen rechten voor.")
    }

    if(!message.guild.roles.cache.find(role => role.name === "Support-Team")) {
        await (message.guild.roles.create({
            name: `Support-Team`,
            color: `YELLOW`,
        }));
    };

    let supportrole = message.guild.roles.cache.find(role => role.name === "Support-Team")

    if(!supportrole) {
        return message.channel.send("Sorry er is wat mis gegaan. Vraag AlwaysLucky_#2666 voor hulp!")
    }

    const vragenName = `vraag-${message.author.username}`
    const partnerName = `partner-${message.author.username}`
    const sollicitatieName = `solli-${message.author.username}`
    const overigName = `dono-spon-${message.author.username}`

    var GreetEmbed = new discord.MessageEmbed()
        .setColor("#ed2a1c")
        .setTitle("**Kies je welke afdeling je nodig hebt.**")
        .addField("1️⃣ Vragen \n2️⃣ Partner\n3️⃣ Sollicitatie\n4️⃣ Sponsor/donatie", "\n \n**Alvast bedankt.**")
        //.setDescription(`<@${message.author.id}> Je support ticket kanaal is <#${c.id}>`)
        .setTimestamp()
        .setFooter("Wessel | Youtube", "https://i.imgur.com/fRVi9vm.jpg")
            
    var embedSend = await message.channel.send(GreetEmbed)
    embedSend.react("1️⃣")
    embedSend.react("2️⃣")
    embedSend.react("3️⃣")
    embedSend.react("4️⃣")

    bot.on("messageReactionAdd", async (reaction, user) => {
        //const player = message.author.username.toLowerCase()
        

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();

        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.emoji.name === `2️⃣`){
            if(message.guild.channels.cache.find(channel => channel.name === `partner-${message.author.username.toLowerCase()}`)) {
                return message.channel.send("Sorry maar je hebt al een lopende ticket.").then(msg => msg.delete({ timeout: 3000}));
            }
                message.guild.channels.create(partnerName, { parent: PartnerCategory.id, topic: `Ticket Owner: <@${message.author.id}>`}).then(async c => {
                const everyone = message.guild.roles.cache.find(role => role.name === `@everyone`)
                embedSend.delete()

                c.updateOverwrite(supportrole, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                })
                c.updateOverwrite(everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                })
                c.updateOverwrite(message.author, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                })
                let CreatedTicketEmbed = new discord.MessageEmbed()
                    .setColor("#ed2a1c")
                    .addField(`**__Ticket Bericht:__** \n ** **\n`, `<@${message.author.id}> U heeft succesvol een ticket aangemaakt!.\nIn dit kanaal kunt u alles uittypen.`)
                    .addField("Benodigdheden:", "**1.** Hoeveel leden heeft u?\n**2.** Hoe lang bestaat u al?\n**3.** Wat verwacht u van ons?\n**4.** Beoordeel uw Discord kwa actief 1 t/m 10! \n ** ** \nCategorie: **Partner**")
                    .setTimestamp()
                    .setFooter("Wessel | Youtube", "https://i.imgur.com/fRVi9vm.jpg")
                c.send(CreatedTicketEmbed)
            }).catch(console.error); 
        }
    });

    bot.on("messageReactionAdd", async (reaction, user) => {
        //const player = message.author.username.toLowerCase()
        

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();

        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.emoji.name === `3️⃣`){
            if(message.guild.channels.cache.find(channel => channel.name === `solli-${message.author.username.toLowerCase()}`)) {
                return message.channel.send("Sorry maar je hebt al een lopende ticket.").then(msg => msg.delete({ timeout: 3000}));
            }
                message.guild.channels.create(sollicitatieName, { parent: SollicitatieCategory.id, topic: `Ticket Owner: <@${message.author.id}>`}).then(async c => {
                const everyone = message.guild.roles.cache.find(role => role.name === `@everyone`)
                embedSend.delete()
  
                c.updateOverwrite(supportrole, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });
                c.updateOverwrite(everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                });
                c.updateOverwrite(message.author, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });
                let CreatedTicketEmbed = new discord.MessageEmbed()
                    .setColor("#ed2a1c")
                    .addField(`Nieuw Support Ticket`, `<@${message.author.id}> Bedankt voor het aanmaken van een ticket. Je wordt zo spoedig mogelijk geholpen.`)
                    .setTimestamp()
                    .setFooter("Wessel | Youtube", "https://i.imgur.com/fRVi9vm.jpg")
                c.send(CreatedTicketEmbed)
            }).catch(console.error); 
        }
    });

    bot.on("messageReactionAdd", async (reaction, user) => {
        //const player = message.author.username.toLowerCase()
        

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();

        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.emoji.name === `4️⃣`){
            if(message.guild.channels.cache.find(channel => channel.name === `dono-spon-${message.author.username.toLowerCase()}`)) {
                return message.channel.send("Sorry maar je hebt al een lopende ticket.").then(msg => msg.delete({ timeout: 3000}));
            }
                message.guild.channels.create(overigName, { parent: OverigCategory.id, topic: `Ticket Owner: <@${message.author.id}>`}).then(async c => {
                const everyone = message.guild.roles.cache.find(role => role.name === `@everyone`)
                embedSend.delete()
 
                c.updateOverwrite(supportrole, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });
                c.updateOverwrite(everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                });
                c.updateOverwrite(message.author, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                });
                let CreatedTicketEmbed = new discord.MessageEmbed()
                    .setColor("#ed2a1c")
                    .addField(`Nieuw Support Ticket`, `<@${message.author.id}> Bedankt voor het aanmaken van een ticket. Je wordt zo spoedig mogelijk geholpen.`)
                    .setTimestamp()
                    .setFooter("Wessel | Youtube", "https://i.imgur.com/fRVi9vm.jpg")
                c.send(CreatedTicketEmbed)
            }).catch(console.error); 
        }
    });
            

    //---------------------

    bot.on("messageReactionAdd", async (reaction, user) => {
        //const player = message.author.username.toLowerCase()
        

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();

        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.emoji.name === `1️⃣`){
            if(message.guild.channels.cache.find(channel => channel.name === `vraag-${message.author.username.toLowerCase()}`)) {
                return message.channel.send("Sorry maar je hebt al een lopende ticket.").then(msg => msg.delete({ timeout: 3000}));
            }
                message.guild.channels.create(vragenName, { parent: VragenCategory.id, topic: `Ticket Owner: <@${message.author.id}>`}).then(async c => {
                const everyone = message.guild.roles.cache.find(role => role.name === `@everyone`)
                embedSend.delete()

                c.updateOverwrite(supportrole, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                })
                c.updateOverwrite(everyone, {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false,
                })
                c.updateOverwrite(message.author, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true,
                })
                
                let CreatedTicketEmbed = new discord.MessageEmbed()
                    .setColor("#ed2a1c")
                    .addField(`Nieuw Support Ticket`, `<@${message.author.id}> Bedankt voor het aanmaken van een ticket. Je wordt zo spoedig mogelijk geholpen.`)
                    .setTimestamp()
                    .setFooter("Wessel | Youtube", "https://i.imgur.com/fRVi9vm.jpg")
                c.send(CreatedTicketEmbed);        
                 
            }).catch(console.error); 
        }
    });
    
}

module.exports.help = {
    name: "ticket"
}