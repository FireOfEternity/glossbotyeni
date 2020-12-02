 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'yasaklı-kelime',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;

  if(args[0] == "ekle"){
    
    
    
   const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım ?yasaklı-kelime ekle kelime**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!args[1]) return message.channel.send(yanlış)  
    
    const yanlış2 = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Böyle Bir Yasaklı Kelime Zaten Ayarlanmış**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   if((db.get(`kodumunkelimeleri_${message.guild.id}`) || []).includes(args.slice(1).join(' '))) return message.channel.send(yanlış2)  
    
    db.push(`kodumunkelimeleri_${message.guild.id}`, args.slice(1).join(' '));
  const okey = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":yess22: **| Yasaklı Kelime **`" + args.slice(1).join(' ') + "`** Olarak Ayarlandı**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   return message.channel.send(okey)  
  } 
     
  if(args[0] == "liste"){    
    let liste = db.get(`kodumunkelimeleri_${message.guild.id}`) || []
  
    const yokiiaq = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yasaklı Kelime Ayarlanmamış**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   if(liste.length < 1) return message.channel.send(yokiiaq)
    
   const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .addField("İlk 15;", liste.map((s, i) => `\`${i + 1}.\` **${s}**`).slice(0, 15))
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   return message.channel.send(yanlış)  
  }
  
  if(args[0] == "kaldır"){
     const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım ?yasaklı-kelime kaldır kelime**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!args[1]) return message.channel.send(yanlış)  
       
  const yanlış0 = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Böyle Bir Kelime Ayarlanmamış**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!(db.get(`kodumunkelimeleri_${message.guild.id}`) || []).includes(args.slice(1).join(' '))) return message.channel.send(yanlış0)  
    
    
    let array = []
    db.get(`kodumunkelimeleri_${message.guild.id}`).forEach(data => {
     if (data !== args.slice(1).join(' ') ) {
      array.push(data)
     }
   })
    
  db.set(`kodumunkelimeleri_${message.guild.id}`, array)
    
  const okey = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":yess22: | `" + args.slice(1).join(' ') + "`** Adlı Kelime Yasaklılardan Çıkartıldı**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
   return message.channel.send(okey)  
  }
     
   const yanlış = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım: ?yasaklı-kelime ekle/kaldır/liste**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!args[0]) return message.channel.send(yanlış)  
  }
}