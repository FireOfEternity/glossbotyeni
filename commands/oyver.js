 
const {MessageEmbed} = require('discord.js')

// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz
module.exports = {
   name: 'oyver',
   run: async(client, message, args) => {

  const bekleniyor = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: | [Oy Vermek İçin Tıkla!](https://top.gg/bot/700608702427955270/vote)")////OY VERME KISMINI ELLEMEYİN OTOMATİK SİZİN BOTUNUZA GÖNDERİCEKTİR.
   .setFooter("🔮 Tüm Hakları Saklıdır.")
   message.channel.send(bekleniyor)
  }
}