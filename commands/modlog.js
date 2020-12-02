 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'mod-log',
   run: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR")) return;
     
  const kanal = message.mentions.channels.first()
    if(!args[0]) {
    const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:no2: | Yanlış Kullanım ?mod-log ayarla/sıfırla**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)
    }
     
     if(args[0] === "ayarla") {
       if(!kanal) {
         const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:no2: | Yanlış Kullanım ?mod-log ayarla #kanal**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)
       }
       
       db.set(`modlog_${message.guild.id}`, kanal.id)
       const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:yess22: | MOD-LOG Başarıyla Açıldı**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)
     }
     
     if(args[0] === "sıfırla") {
       db.delete(`modlog_${message.guild.id}`)
       const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:yess22: | Ban Koruması Başarıyla Kapatıldı**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)
     }
     
     
   }
}