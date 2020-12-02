const fetch = require('node-fetch')
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz
module.exports = {
   name: 'uptime',
   run: async(client, message, args) => {
   const sa = require("dblapi.js")
   const dbl = new sa("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwMDYwODcwMjQyNzk1NTI3MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2NjU0MjM4fQ.9Ju_hrM3QUJpFH1Fkm80NSgqmOlKxJprEl5fDscsSpI", client)
   dbl.hasVoted(message.author.id).then(voted => {
     if(voted === true) {
const yanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: **| Yanlış Kullanım ?uptime link**")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
 if(!args[0]) return message.channel.send(yanlış)  
   
  let data = db.get("urller") || []  
   if(data.find(yarra => yarra.url == args[0])){
    const bekleaq = new MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":yess22: **| Böyle Bir Link Zaten Ayarlı!**")//OY VERME KISMINI ELLEMEYİN OTOMATİK SİZİN BOTUNUZA GÖNDERİCEKTİR.
     .setFooter("🔮 Tüm Hakları Saklıdır.")
    return message.channel.send(bekleaq)
  }
   if(!args[0].includes("https://")){
  const piçYanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no: **| Bu Link Değil 😢 Beni Bozmayamı Çalışıyorsun**")//OY VERME KISMINI ELLEMEYİN OTOMATİK SİZİN BOTUNUZA GÖNDERİCEKTİR.
   .setFooter("🔮 Tüm Hakları Saklıdır.")
   return message.channel.send(piçYanlış)
   }    
   
   const bekleaq = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":load: **| Linkiniz Kontrol Ediliyor Bu Biraz Uzun Sürebilir Tahmini Süre 15dk 20dk**")//OY VERME KISMINI ELLEMEYİN OTOMATİK SİZİN BOTUNUZA GÖNDERİCEKTİR.
   .setFooter("🔮 Tüm Hakları Saklıdır.")
  return message.channel.send(bekleaq).then(msg => {
     
     
  fetch(args[0]).then(() => {
   db.push("urller", {url: args[0]}) 
  const eklendiBeleşci = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":yess22: **| Link Başarıyla Uptime Ediliyor..**")//OY VERME KISMINI ELLEMEYİN OTOMATİK SİZİN BOTUNUZA GÖNDERİCEKTİR.
   .setFooter("🔮 Tüm Hakları Saklıdır.")
   return  msg.edit(eklendiBeleşci)
  }).catch(() => {
  const piçYanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no: **| Bu Link Değil 😢 Beni Bozmayamı Çalışıyorsun**")//OY VERME KISMINI ELLEMEYİN OTOMATİK SİZİN BOTUNUZA GÖNDERİCEKTİR.
   .setFooter("🔮 Tüm Hakları Saklıdır.")
   return msg.edit(piçYanlış)
  })
  })
     } else {
       const bekleniyor = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: **| Bu Komudu Kullanabilmek İçin Bota Oy Vermelisin [Oy Vermek İçin Tıkla!](https://top.gg/bot/700608702427955270/vote)**")//OY VERME KISMINI ELLEMEYİN OTOMATİK SİZİN BOTUNUZA GÖNDERİCEKTİR.
   .setFooter("🔮 Tüm Hakları Saklıdır.")
   message.channel.send(bekleniyor)
     }
   })
  
  }
}