 
 
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz
// ali istatsitik kodunu aldın demi ibne görmedimki hiç istatistiklerini yaparım yok lan benim yaptığım projeye geldiğinde
module.exports = {
   name: 'selfbot',// bu arada üsteki mesaj clone olmuş siktir edin qwe.qw silv ghvjbjhnkjmeklşn
   run: async(client, message, args) => {//Ç:D
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
   
  if(args[0] == "aç"){
    db.set(`selfbot_${message.guild.id}`, true)
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Self Bot Koruması Açıldı !**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion) 
  }   
  if(args[0] == "kapat"){
    db.delete(`selfbot_${message.guild.id}`)
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Self Bot Koruması Kapatıldı !**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion) 
  }   
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım: ?selfbot aç/kapat**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
   if(!args[0]) return message.channel.send(motion)
     
   }
}