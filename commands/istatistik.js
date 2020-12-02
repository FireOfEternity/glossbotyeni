 
const {MessageEmbed} = require('discord.js')

// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'istatistik',
   run: async(client, message, args) => {

  const bekleniyor = new MessageEmbed()
   .setThumbnail("https://cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp?size=4096")
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .addField("İsim", "Gloss", true)
   .addField("Yazılım dili", "Javascript & NodeJs", true)
   .addField("Kullanılan modül:", "discord.js", true)
   .addField("NodeJS version:", "14.15.1", true)
   .addField("DiscordJS version:", "^12.5.1", true)// 12.5.1 çıkmadan 12.5.1 yapmışlar onların kodculuğu xd
   .addField("Platform:", process.platform, true)
   .addField("Ping", client.ws.ping, true)
   .addField("Toplam kullanıcı:", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0), true)
   .addField("Toplam Sunucu:", client.guilds.cache.size, true)
   .addField("Toplam kanal:", client.channels.cache.size, true)
   .addField("Toplam Rol:", client.guilds.cache.reduce((a, b) => a + b.roles.cache.size, 0), true)
   .addField("Toplam emoji:", client.emojis.cache.size, true)// tm yap
   .addField("Bot oluşturulma tarihi:", "Ananı Sikerken")
   .addField("Komut sayısı:", client.commands.size)
   .setColor("#3f007f")
   .setTimestamp()
   .setFooter("🔮 Tüm Hakları Saklıdır.")
   message.channel.send(bekleniyor)
  }
}