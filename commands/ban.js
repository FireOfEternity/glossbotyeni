 
 
const {MessageEmbed} = require('discord.js')

// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz
// ali istatsitik kodunu aldın demi ibne görmedimki hiç istatistiklerini yaparım yok lan benim yaptığım projeye geldiğinde
module.exports = {
   name: 'ban',
   run: async(client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return;
     if(!message.guild.members.cache.get(client.user.id).hasPermission("BAN_MEMBERS")) return;
     let kişi = message.mentions.users.first()
     let sebep = args.slice(1).join(" ")
     if(!kişi) {
       const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:no2: | Yanlış Kullanım: ?ban @kişi**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)
     }// knk iki dk salsana bi
     if(!sebep) sebep = `Sebep: Belirtilmemiş`
     
     if(kişi.id === message.guild.ownerID) {
       const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:no2: | Sunucu Sahibini Banlayamazsın Dostum :thinking:**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)
     }
     
     if(kişi.id === client.user.id) {
       const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:no2: | Bana Ban Atamazsın Dostum :thinking:**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)
     }
     
     if(kişi.id === message.author.id) {
       const motion = new MessageEmbed()
.setColor("#3f007f")
.setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
.setDescription(`**:no2: | Kendi Kendini Banlayamazsın Dostum :thinking:**`)
.setFooter(`🔮 Tüm Hakları Saklıdır.`)
return message.channel.send(motion)//yav değiştiririz üşeniyom şuan
     }// motion sil amq q.weqwe adam yaptı sancaklar olm şuan ypamasan unuturuz

 const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`:yess22: **|** \`${kişi.tag}\` **Adlı Üye Sunucudan Uzaklaştırıldı/Yasaklandı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)// düzeltim
   message.channel.send(motion)

  message.guild.members.ban(kişi.id, { reason: `Sebep: ${sebep} | Kullanıcıyı Banlatan Kişi ${message.author.tag}` })
       
   }
}