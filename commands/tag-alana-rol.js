 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'tag-alınca-rol',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
     
     if(args[0] === "ayarla") {
     let rol = message.mentions.roles.first()  
    const hata = new MessageEmbed()
     .setColor("#3f007f")
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
     .setDescription(`**:no2: | Yanlış Kullanım ?tag-alınca-rol ayarla @rol tagınız**`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      if(!rol && !args[2]) return message.channel.send(hata) 
       
       db.set(`tagalanarol_${message.guild.id}.rol`, rol.id)
        db.set(`tagalanarol_${message.guild.id}.tag`, args[2])
       
       const motion = new MessageEmbed()
        .setColor("#3f007f")
        .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
        .setDescription(`:yess22: **| ${args[2]} Tagını Alınca \`${rol.name}\` Rolü Verilecek**`)
        .setFooter(`🔮 Tüm Hakları Saklıdır.`)
       return message.channel.send(motion)
     }
     
     if(args[0] === "sıfırla") {
       db.delete(`tagalanarol_${message.guild.id}`)
       const motion = new MessageEmbed()
        .setColor("#3f007f")
        .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
        .setDescription(`**:yess22: | Tag Alınca Rol Verme Sistemi Deaktif Edildi**`)
        .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
     }
     
    const motion = new MessageEmbed()
     .setColor("#3f007f")
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
     .setDescription(`**:no2: | Yanlış Kullanım ?tag-alınca-rol ayarla/sıfırla**`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    if(!args[0])  return message.channel.send(motion)
   }
}