 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'rolkomut',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
   let role = message.mentions.roles.first()
  if(args[0] == "ayarla"){
   const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım ?rolkomut @rol komutadı**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!role && !args[2]) return message.channel.send(yanlış)  
   
 const yanlış2 = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Bu Komut Zaten Ayarlanmış**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   if((db.get(`rolkomut_${message.guild.id}`) || []).find(s => s.komut == args[2])) return message.channel.send(yanlış2)  
    
  
    db.push(`rolkomut_${message.guild.id}`, {rol: role.id, komut: args[2]});
  const okey = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":yess22: **| Role Komut ?" + args[2] + ` Yazılırsa ${role} Rolü Verilecektir**`)
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   return message.channel.send(okey)  
  } 
     
  if(args[0] == "liste"){    
    let liste = db.get(`rolkomut_${message.guild.id}`) || []
  
    const yokiiaq = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Rol Komut Ayarlanmamış**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   if(liste.length < 1) return message.channel.send(yokiiaq)
    
   const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .addField("İlk 15;", liste.map((s, i) => `\`${i + 1}.\` **${message.guild.roles.cache.get(s.rol).name}: ${s.komut}**`).slice(0, 15))
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   return message.channel.send(yanlış)  
  }
  
  if(args[0] == "kapat"){
    
  
  const okey = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":yess22: **| Rol Komut Verisi Silindi/Kapatıldı**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    message.channel.send(okey)  

     db.delete(`rolkomut_${message.guild.id}`)
    return
  }
     
   const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım ?rolkomut ayarla/liste/kapat**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!args[0]) return message.channel.send(yanlış)  
  }
}