 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'giriş-çıkış',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
     
     if(args[0] === "ayarla") {
     let kanal = message.mentions.channels.first()  
    const hata = new MessageEmbed()
     .setColor("#3f007f")
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
     .setDescription(`**:no2: | Yanlış Kullanım ?giriş-çıkış ayarla #kanal**`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      if(!kanal) return message.channel.send(hata) 
       
       db.set(`hgbbKanalResim_${message.guild.id}`, kanal.id)
       
       const motion = new MessageEmbed()
        .setColor("#3f007f")
        .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
        .setDescription(`:yess22: **|** \`#${kanal.name}\` **Adlı Kanala Gelen & Giden Üyeleri Resimli Bir Şekilde Atacağım**`)
        .setFooter(`🔮 Tüm Hakları Saklıdır.`)
       return message.channel.send(motion)
     }
     
     if(args[0] === "sıfırla") {
       db.delete(`hgbbKanalResim_${message.guild.id}`)
       const motion = new MessageEmbed()
        .setColor("#3f007f")
        .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
        .setDescription(`**:yess22: | Gelen & Giden Başarıyla Kapatıldı**`)
        .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
     }
     
    const motion = new MessageEmbed()
     .setColor("#3f007f")
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
     .setDescription(`**:no2: | Yanlış Kullanım ?giriş-çıkış ayarla/sıfırla**`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    if(!args[0])  return message.channel.send(motion)
   }
}