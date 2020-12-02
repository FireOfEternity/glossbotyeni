 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'kayıt',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;

   let data = db.get(`kayıt_${message.guild.id}`)
  if(args[0] == "ayarla"){
   let kanal = message.mentions.channels.first();
   let role = message.mentions.roles.first()
   
   const yanlış = new MessageEmbed()
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
      .setColor("#3f007f")
      .setDescription(":no2: **| Yanlış Kullanım ?kayıt ayarla #kanal @rol**")
      .setFooter("🔮 Tüm Hakları Saklıdır.")   
  if(!kanal || !role) return message.channel.send(yanlış)  
    
    db.set(`kayıt_${message.guild.id}.kanal`, kanal.id)
    db.set(`kayıt_${message.guild.id}.rol`, role.id)
   const motion = new MessageEmbed()
   .setColor("#3f007f")
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
   .setDescription(`**:yess22: | Kayıt Kanalı** \`${kanal.name}\` **Olarak Ayarlandı Rol İse** \`${role.name}\` **Olarak Ayarlandı**`)
   .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion)
  } 
     
  if(args[0] == "ol"){    
    
    if(!db.get(`kayıt_${message.guild.id}`)){
     const yanlış = new MessageEmbed()
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
      .setColor("#3f007f")
      .setDescription(":no2: **| Kayıt Sistemi Ayarlanmamış**")
      .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış)  
    }
  
    
   if(!args[1] || isNaN(args[1]) || !args[2]){
    const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım ?kayıt ol 17 Muhammed**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   return message.channel.send(yanlış)  
   }
    
     if(data.kanal !== message.channel.id) return
    
    message.guild.members.cache.get(message.author.id).setNickname(`${args[1]} | ${args[2]}`)
  const motion = new MessageEmbed()
   .setColor("#3f007f")
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
   .setDescription(`**:yess22: | ${args[1]} | ${args[2]} Şeklinde Başarıyla Kayıt Oldunuz.**`)
   .setFooter(`🔮 Tüm Hakları Saklıdır.`)
  return message.channel.send(motion).then(async() => {
    await message.member.roles.cache.filter(s => s.name !== "@everyone").forEach(x => message.member.roles.remove(x.id))
      message.member.roles.add(data.rol)
    })
  }
  
  if(args[0] == "sıfırla"){
  db.delete(`kayıt_${message.guild.id}`)
  const okey = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":yess22: **| Kayıt Sistemi Kapatıldı**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    return message.channel.send(okey)  
    
  }
     
   const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **?kayıt ol/ayarla/sıfırla**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!args[0]) return message.channel.send(yanlış)  
  }
}