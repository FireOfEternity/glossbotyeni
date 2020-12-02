const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms');
const randomstring = require('randomstring');


module.exports = {
   name: "çekiliş",
   run: async(client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.")
  
     
  if(args[0] == "yap"){   
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

    function destructMS(milli) {
        if (isNaN(milli) || milli < 0) {
          return null;
        }
      
        var d, h, m, s;
        s = Math.floor(milli / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        var yazi;
        if (d !== 0) yazi = `${d} gün`;
        if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
        if (h !== 0 && !yazi) yazi = `${h} saat`;
        if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
        if (m !== 0 && !yazi) yazi = `${m} dakika`;
        if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
        if (s !== 0 && !yazi) yazi = `${s} saniye`;
        if (yazi) return yazi;
        if (!yazi) return `1 saniye`;
      };
    
    function cekme(message, array) {
      var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || []
      var cekilenkisi = array[Math.floor(Math.random() * array.length)]
      if (!client.users.cache.get(cekilenkisi.id)) {
        return cekme(message, array)
      }
      if (cekilenkisi.id == client.user.id) {
        return cekme(message, array)
      }
      while (eskikazananlar.includes(cekilenkisi.id)) {
        return cekme(message, array)
      }
      if (!eskikazananlar.includes(cekilenkisi.id)) {
        if (db.has(`cekilis_${message.id}.kazananlar`)) {
          db.push(`cekilis_${message.id}.kazananlar`, cekilenkisi.id)
        }else{
          db.set(`cekilis_${message.id}.kazananlar`, [cekilenkisi.id])
        }
      }
    }

    if(!args[1]) {
    message.delete()
      
    const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Çekiliş Ne Kadar Sürecek? (`x saniye`, `x dakika`, `x saat`, `x gün` Şeklinde Yazınız)**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış).then(msg => msg.delete({timeout: 10000}))
    
    }
    if(isNaN(args[1])) {
        message.delete()
      
     const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Çekiliş Ne Kadar Sürecek? (`x saniye`, `x dakika`, `x saat`, `x gün` Şeklinde Yazınız)**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış).then(msg => msg.delete({timeout: 10000}))
  
    }
    if(!args[2]) {
        message.delete()
     const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Çekiliş Ne Kadar Sürecek? (`x saniye`, `x dakika`, `x saat`, `x gün` Şeklinde Yazınız)**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış).then(msg => msg.delete({timeout: 10000}))
    }
    if (!isNaN(args[2])) {
     message.delete()
     const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Çekiliş Ne Kadar Sürecek? (`x saniye`, `x dakika`, `x saat`, `x gün` Şeklinde Yazınız)**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış).then(msg => msg.delete({timeout: 10000}))
    }
    if (!args[3]) {
        message.delete()
    const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Çekilişte Kaç Kazanan Olacak?**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış).then(msg => msg.delete({timeout: 10000}))
      
    }
    if (isNaN(args[3])) {
        message.delete()
     const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Çekilişte Kaç Kazanan Olacak?**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış).then(msg => msg.delete({timeout: 10000}))  
    }
    if (!args.slice(4).join(' ')) {
        message.delete()
     const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Çekilişte Ne Verilecek?**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     return message.channel.send(yanlış).then(msg => msg.delete({timeout: 10000}))    
    }

    /*_________________________________________*/

    const sure = [args[1], args[2]].join(' ')
    const kazanacak = args[3]
    const verilecek = args.slice(4).join(' ')

    const bitecegizamanms = Date.now() + ms(sure.replace(' dakika', 'm').replace(' saat', 'h').replace(' saniye', 's').replace(' gün', 'd'))
    const cekilisid = randomstring.generate({ length: 6, readable: true, charset: 'alphabetic', capitalization: 'uppercase' })
    
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setAuthor('🎉 Çekiliş 🎉')
    .setTitle('**' + verilecek + '**')
    .setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** Bekleniyor...`)
    .setFooter(`${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır  | Kalan Süre:`)
    .setTimestamp(bitecegizamanms)
    .setColor("#3f007f")
    message.channel.send(embed).then(async msg => {
    msg.react('🎉').then(async reaction => {
       db.set(`cekilis_${msg.id}`, {mesaj: {id: msg.id, kanal: msg.channel.id, sunucu: msg.guild.id}, kazanacak: kazanacak, verilecek: verilecek, bitecek: bitecegizamanms, sahibi: message.author.id, olusturma: Date.now(), kazananlar: [], cekilisid: cekilisid})
       db.set(`cekilisidsi_${cekilisid}`, {mesaj: {id: msg.id, kanal: msg.channel.id, sunucu: msg.guild.id}, kazananlar: [], cekilisid: cekilisid})
    
        
            const interval = setInterval(async function(){
              
              if (!db.has(`cekilis_${msg.id}`)) return clearInterval(interval)
                const kalanzaman = bitecegizamanms - Date.now()   
                if (kalanzaman <= 0) {
                  embed.setDescription(`Şanslı Kişi Şeciliyor...`)
                  msg.edit(embed)
                  clearInterval(interval)
                    const kisiler = reaction.users.cache
                    const asilkisisayisi = reaction.users.cache.size - 1
                    if (asilkisisayisi < kazanacak) {
                        let embed = new Discord.MessageEmbed()
                        .setAuthor('🎉 Çekiliş Bitti 🎉')
                        .setTitle('**' + verilecek + '**')
                        .setDescription(`Yeterli Katılım Olmadığından Çekiliş İptal Oldu.`)
                        .setFooter(`${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır | Bitti:`)
                        .setTimestamp(bitecegizamanms)
                        .setColor("#3f007f")
                         msg.edit(embed)
                        db.delete(`cekilis_${msg.id}`)
                        let thall = db.all().filter(i => i.ID.includes(msg.id))
                        for (const uu of thall) {
                          db.delete(uu.ID)
                        }
                    } else {
                      var array = reaction.users.cache.array()
                        var u;
                        for (u = 0; u < kazanacak; u++) {
                          cekme(msg, array)
                        }
                      await sleep(50)
                        let kazananherkes = db.fetch(`cekilis_${msg.id}.kazananlar`)
                            let embed = new Discord.MessageEmbed()
                            .setAuthor('🎉 Çekiliş Bitti 🎉')
                            .setTitle('**' + verilecek + '**')
                            .setDescription(`**Kazanan Kişiler:** <@${kazananherkes.join('>, <@')}>`)
                            .setFooter(`${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır | Bitti: `)
                            .setTimestamp(bitecegizamanms)
                            .setColor("#3f007f")
                            msg.edit(embed)
                           msg.channel.send(`<@${kazananherkes.join('>, <@')}>`)
                            msg.channel.send(new Discord.MessageEmbed().setColor("#3f007f").setDescription(`**Tebrikler** <@${kazananherkes.join('>, <@')}>! **\`${verilecek}\` Çekilişini Kazandınız!**`))
                            db.set(`cekilisidsi_${cekilisid}.kazananlar`, kazananherkes)
                            db.delete(`cekilis_${msg.id}`)
                            let theall = db.all().filter(i => i.ID.includes(msg.id))
                            for (const ua of theall) {
                              db.delete(ua.ID)
                            }
                    }
                } else {
                  
                const kalanzamanyazi = destructMS(kalanzaman)
                embed.setDescription(`**Çekilişe Katılmak İçin 🎉 Tepkisine Tıklaman Yeterli Çekişie Kalan Süre: ${kalanzamanyazi}**`)
                msg.edit(embed)
                  
                }
              
            }, 5000)
        })
    })
  }
   const yanlış = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(":no2: **| Yanlış Kullanım: ?çekiliş yap**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(!args[0]) return message.channel.send(yanlış) 
 }
}