 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'reklamengel',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
    const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yetkiniz Bulunmamaktadır :warning:**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion)
    };
// komutu yanlız yapıyorum piç ali uyuyor (İyi Kullanımlar (Gizli Cloneci XD))
   if(args[0] == "hepsi"){
    db.set(`reklamEngel_${message.guild.id}.all`, true)
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Reklam Engelleme Tüm Kanallar İçin Açıldı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion)
   }
   if(args[0] == "kanal"){
    let kanal = message.mentions.channels.first();
    db.set(`reklamEngel_${message.guild.id}.${kanal.id}`, true)
  const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Reklam Engelleme Sadece ${kanal} İçin Açıldı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion)
   }
   if(args[0] == "kapat"){
   db.delete(`reklamEngel_${message.guild.id}`)
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Reklam Engel Başarıyla Kapatıldı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion)
   }
  const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:no2: | Yanlış Kullanım: ?reklamengel hepsi/kanal/kapat**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     if(!args[0]) return message.channel.send(motion)
   }
}