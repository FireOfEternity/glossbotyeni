 
const {MessageEmbed} = require('discord.js')

// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'ping',
   run: async(client, message, args) => {

const bekleniyor = new MessageEmbed()
 .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
 .setColor("#3f007f")
 .setImage("https://cdn.discordapp.com/emojis/712616118384197682.gif?v=1")
 .setFooter("🔮 Tüm Hakları Saklıdır.")
 message.channel.send({embed: bekleniyor}).then(sa => {
   setTimeout(() => {
     const slkgloss = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`**Botun Pingi ${client.ws.ping}'ms'dir**`)
     .setFooter("🔮 Tüm Hakları Saklıdır.")
     sa.edit(slkgloss)
   }, 5000)
 })
     
   }
}