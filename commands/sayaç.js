 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'sayaç',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
   
   if(args[0] == "ayarla"){
  let kanal = message.mentions.channels.first();
 if(!args[2]){
 
    const yanlış = new MessageEmbed()
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
      .setColor("#3f007f")
      .setDescription(":no2: **| Yanlış Kullanım ?sayaç ayarla #kanal sayı || Eğer Sayıyı Yazmazsanız Otomatik Olarak Belirler**")
      .setFooter("🔮 Tüm Hakları Saklıdır.")   
     if(!kanal) return message.channel.send(yanlış)
     
  let sayı = message.guild.memberCount + 100 
   db.set(`sayaç_${message.guild.id}.sayı`, sayı);
   db.set(`sayaç_${message.guild.id}.kanal`, kanal.id);
    const motion = new MessageEmbed()
       .setColor("#3f007f")
       .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
       .setDescription(`**:yess22: | Sayaç Kanalı \`${kanal.name}\`  Olarak Ayarlandı Sayaç Sayısı İse** \`${sayı}\` **Olarak Otomatik Biçimde Ayarlandı**`)
       .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion) 
    } 
   db.set(`sayaç_${message.guild.id}.sayı`, args[2]);
   db.set(`sayaç_${message.guild.id}.kanal`, kanal.id);
    const motion = new MessageEmbed()
       .setColor("#3f007f")
       .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
       .setDescription(`**:yess22: | Sayaç Kanalı \`${kanal.name}\`  Olarak Ayarlandı Sayaç Sayısı İse** \`${args[2]}\` **Olarak Ayarlandı**`)
       .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion) 
     
   }
   if(args[0] == "sıfırla"){
     db.delete(`sayaç_${message.guild.id}`)
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Sayaç Başarıyla Sıfırlandı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion) 
   }  
     
     
     
  const yanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: **| Yanlış Kullanım: ?sayaç ayarla/sıfırla**")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
  if(!args[0]) return message.channel.send(yanlış)
   
  }
}