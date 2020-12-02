 
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'bilet-kurulum',
   run: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR")) return;
     
let channel = message.mentions.channels.first()
const yanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: **| Yanlış Kullanım ?bilet-kurulum #kanal**")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
 if(!channel) return message.channel.send(yanlış)  
     
     
   const ticket = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setTitle("Gloss Bot Bilet Sistemi")
   .setDescription("Bileti Açmak İçin :tickets: Tepkisine Tıklayınız.")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
  channel.send(ticket).then(async msg => {
      
    await msg.react("🎟️")
    if(message.guild.roles.cache.find(s => s.name !== "Bilet Desteği")) message.guild.roles.create({data: {name: "Bilet Desteği"}}).then(role => {
      db.set(`ticketSystem_${message.guild.id}.role`, role.id);
    })  
    db.set(`ticketSystem_${message.guild.id}.message`, msg.id);
   const ticketokey = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setTitle("Gloss Bot Bilet Sistemi")
   .setDescription(`Bilet Kanalı ${channel} Olarak Ayarlandı`)
   .setFooter("🔮 Tüm Hakları Saklıdır.")  
   message.channel.send(ticketokey)

  })
 }
}