const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL },  partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')

const commands = client.commands = new Discord.Collection();
const aliases = client.aliases = new Discord.Collection();

fs.readdirSync('./commands', {encoding: 'utf8'}).filter(file => file.endsWith(".js")).forEach((files) => {
  let command = require(`./commands/${files}`);
  commands.set(command.name, command);
})

const prefix = "?" // burayı ayarlayın rolkomut prefix

client.on('ready',() => {
  console.log("I'm Ready!")
  client.user.setStatus("dnd")
  client.user.setActivity("?yardım", {type: 'PLAYING'})
})

 client.on('message', async function(message){

    if(!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    var cmd = client.commands.get(args.shift())
    if(cmd) {
      let karaliste = db.fetch(`karaliste_${message.author.id}`)
      if(karaliste) {
          const embed = new Discord.MessageEmbed()
          .setColor("#3f007f")
          .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
          .setFooter("⛔️ Sen Karalistedesin!")
          return message.channel.send(embed)
      }
      cmd.run(client, message, args);
    }
})

client.on('messageReactionAdd', async (reaction, user) => {
  let message = reaction.message
  let supportRole = await db.fetch(`ticketSystem_${message.guild.id}.role`);
  let messageID = await db.fetch(`ticketSystem_${message.guild.id}.message`);
 
  if(message.id !== messageID) return;
    await reaction.users.remove(user.id);
  if(db.get(`ticketSystem_${message.guild.id}.ticketRequest.${user.id}`)) return
  if(!message.guild.channels.cache.filter(s => s.type == 'category').find(s => s.name == "biletler")){
    await message.guild.channels.create("biletler", {type: 'category'});
  } 
  let category = await message.guild.channels.cache.filter(s => s.type == 'category').find(s => s.name == "biletler")
 

  message.guild.channels.create(`bilet-${user.discriminator}`, {type: 'text', parent: category.id}).then(async(channel) => {
   
   channel.createOverwrite(message.guild.id, { VIEW_CHANNEL: false })
   channel.createOverwrite(user, { VIEW_CHANNEL: true, SEND_MESSAGES: true })
   if(supportRole) channel.createOverwrite(supportRole, { VIEW_CHANNEL: true, SEND_MESSAGES: true })
    
 await channel.send(`<@!${user.id}>`)
  const ticket = new Discord.MessageEmbed()
   .setColor("#3f007f")
   .setTitle("Gloss Bot Bilet Sistemi")
   .setDescription("Desteği Kapatmak İçin 🗑️ Tepkisine Tıklayınız")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
    channel.send(ticket).then(async msg => {
     await msg.react("🗑️")
     db.set(`ticketSystem_${message.guild.id}.messages.${msg.id}`, true)
    db.set(`ticketSystem_${message.guild.id}.ticketRequest.${user.id}`, true)
   })
  })
})  

client.on('messageReactionAdd', async (reaction, user) => {
  if(reaction.emoji.name !== "🗑️") return;
  let mesaj = await db.fetch(`ticketSystem_${reaction.message.guild.id}.messages.${reaction.message.id}`)
  if(mesaj){
    reaction.message.channel.delete()
     db.delete(`ticketSystem_${reaction.message.guild.id}.messages.${reaction.message.id}`)
     db.delete(`ticketSystem_${reaction.message.guild.id}.ticketRequest.${user.id}`)
  }
})
const AntiSpam = require("./spamkorumasi.js");
const cooldown = new Set();

client.on("message", async msg => {
 if(!msg.guild) return;
// kodumun çocuğuna armağan olsun (soulfly)
  
 let spamkorumasi = await db.get(`spamkorumasi_${msg.guild.id}`);
 if (!spamkorumasi) return;
 if (client.user.id == msg.author.id) return;
 AntiSpam(client, msg);
 if (cooldown.has(msg.author.id)) return;
});

client.on('message', msg => {
  
if(!db.get(`mute_${msg.guild.id}_${msg.author.id}`)) return 
if(msg.member.hasPermission("BAN_MEMBERS")) return
  msg.author.send(`Hey ${msg.author}, Sunucuda Susturulmuşsun! :rage:`)
  msg.delete()
})

client.on('guildMemberAdd', member => {
  let tag = db.get(`ototag_${member.guild.id}`);
  let otorolChannel = db.get(`otorol_${member.guild.id}.channel`)
  let dataRole = db.get(`otorol_${member.guild.id}.roles`)
  let dataRoleBot = db.get(`otorol_${member.guild.id}.botrole`)
  if(tag)  member.guild.members.cache.get(member.id).setNickname(`${tag} | ${member.user.username}`)
  if(member.user.bot){
    return member.roles.add(dataRoleBot)
  } else {
    if(dataRole && dataRole.length > 0){
      dataRole.forEach(s => {
        member.roles.add(s)
      }) 
    }
  }
})

client.on('message', message => {
  if((db.get(`kodumunkelimeleri_${message.channel.id}`) || []).some(kelime => message.content.includes(kelime))){
  if(message.member.hasPermission("BAN_MEMBERS")) return
    message.delete()
    message.channel.send(`Hey ${message.author}, Bu Sunucuda Yasaklı Kelime Kullanamazsın! :rage:`).then(msg => msg.delete({timeout: 6000}))
  }
})

client.on('message', async message => {
  let data = await db.fetch(`rolkomut_${message.channel.id}`) || []
// find mantığı vardıda çakma kodculara yaranmak istemedim neyse soulfly iyi kullanımlar diller.
 data.forEach(asd => {
  if(prefix+asd.komut == message.content){
   message.member.roles.add(asd.rol)
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`:yess22: **| <@&${asd.rol}> Adlı Rolü Kaptın :D**`)
     .setFooter("🔮 Tüm Hakları Saklıdır.")
    return message.channel.send(bekleaq)
  }
 })
})
const Canvas = require('canvas')
client.on('guildMemberAdd', async member => {
  const ch = db.get(`hgbbKanalResim_${member.guild.id}`)
  if(!ch) return
  const kanal = member.guild.channels.cache.get(ch)
  const canvas =  Canvas.createCanvas(1980,1080)
  const ctx =  canvas.getContext('2d')
  const userImage = await Canvas.loadImage(member.user.displayAvatarURL({format:'jpg',size:4096}))
  const bg = await Canvas.loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2YMnOcscL37z_OfV1xgaIYo2mzByCSK3Vg&usqp=CAU')
  const door = await Canvas.loadImage('https://cdn.glitch.com/16c1f2c8-0b25-4605-89ff-c86675c38573%2F1594111765064.png?v=1594111792947')
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)
  ctx.drawImage(door,0,915,150,150)
  ctx.font = '100px Candara'
  ctx.fillStyle ="#F0F8FF"
  ctx.textAlign ='center'
  ctx.fillText(member.user.username,1000,780)
  ctx.fillText('Sunucumuza Hoşgeldin.',1000,950)
  ctx.lineWidth = 10
  ctx.beginPath()
  ctx.shadowColor='black'
  ctx.shadowBlur =100
  ctx.arc(1020,350,270,0,Math.PI*2,true)
  ctx.closePath()
  ctx.stroke()
  ctx.clip()
  ctx.drawImage(userImage,725,55,590,590)
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(),'hoşgeldin.png')
  if(!kanal)return;
  kanal.send(attachment)
  })
client.on('guildMemberRemove', async member => {
  const ch =  db.get(`hgbbKanalResim_${member.guild.id}`)
  if(!ch) return
  const kanal = member.guild.channels.cache.get(ch)
  const canvas =  Canvas.createCanvas(1980,1080)
  const ctx =  canvas.getContext('2d')
  const userImage = await Canvas.loadImage(member.user.displayAvatarURL({format:'jpg',size:4096}))
  const bg = await Canvas.loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2YMnOcscL37z_OfV1xgaIYo2mzByCSK3Vg&usqp=CAU')
  const door = await Canvas.loadImage('https://cdn.glitch.com/16c1f2c8-0b25-4605-89ff-c86675c38573%2F1594111773688.png?v=1594111787318')
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)
  ctx.drawImage(door,1829,915,150,150)
  ctx.font = '100px Candara'
  ctx.fillStyle ="#F0F8FF"
  ctx.textAlign ='center'
  ctx.fillText(member.user.username,1000,780)
  ctx.fillText('Sunucumuzdan Ayrıldı.',1000,950)
  ctx.lineWidth = 10
  ctx.beginPath()
  ctx.shadowColor='black'
  ctx.shadowBlur =100
  ctx.arc(1020,350,270,0,Math.PI*2,true)
  ctx.closePath()
  ctx.stroke()
  ctx.clip()
  ctx.drawImage(userImage,725,55,590,590)
  ctx.blur = 3
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(),'gülegüle.png')
  if(!kanal) return;
  kanal.send(attachment)
  })
client.on('message', (message) => {
 if(!message.guild || message.author.bot || message.content.startsWith(prefix)) return;
  db.add(`levels.${message.author.id}.xp`, 2)
  if(db.get(`levels.${message.author.id}.xp`) >= 155){
    db.add(`levels.${message.author.id}.level`, 1)
    db.delete(`levels.${message.author.id}.xp`)
  }
  
})

client.on('message', message => {
  if(db.get(`sa-as_${message.guild.id}`)){
  if(message.author.bot || !message.guild) return
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`Aleyküm Selam, ${message.author}`)
     .setFooter("🔮 Tüm Hakları Saklıdır.")
  
   if(["sa","selam","selamın aleyküm"].some(msg => message.content.toLowerCase() == msg)) {
    message.react("783621647420620820")
     return message.channel.send(bekleaq); 
   }
  }
})

client.on('guildMemberAdd', member => {
  let sayaç = db.get(`sayaç_${member.guild.id}.sayı`);
  let kanal = db.get(`sayaç_${member.guild.id}.kanal`);
  if(!sayaç && !kanal) return
  if(member.guild.memberCount >= sayaç){
    return  member.guild.channels.cache.get(kanal).send("🎉  Hedef Sayıya Ulaşıldı!") // aynı bok bilmiyoduk salladık
  }
   const embed = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`
        Sunucuya Hoşgeldin, \`${member.user.tag}\`!
        Seninle Beraber \`${member.guild.memberCount}\` Kişi Olduk. \`${sayaç}\` Kişi Olmaya \`${sayaç - member.guild.memberCount}\` Kadar Kişi Kaldı. | :bilmemne:
    `)
   .setImage("https://cdn.discordapp.com/attachments/783399702577414186/783629225109749770/ss4.gif-1.gif")
   .setThumbnail("https://images-ext-2.discordapp.net/external/V0lgAhtlD5AXMOiI4O0CsGoyQ2UqJDuVlqcmvqDlnhw/%3Fv%3D1/https/cdn.discordapp.com/emojis/744606053982928906.gif")
     .setFooter("🔮 Tüm Hakları Saklıdır.")
  member.guild.channels.cache.get(kanal).send(embed)
})
client.on('guildMemberRemove', member => {
  let sayaç = db.get(`sayaç_${member.guild.id}.sayı`);
  let kanal = db.get(`sayaç_${member.guild.id}.kanal`);
  if(!sayaç && !kanal) return
     const embed = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`
        Görüşürüz, \`${member.user.tag}\`!
        Toplam \`${member.guild.memberCount}\` Kişiyiz. \`${sayaç}\` Kişi Olmaya \`${sayaç - member.guild.memberCount}\` Kadar Kişi Kaldı. | :bilmemne:
    `)
   .setImage("https://cdn.discordapp.com/attachments/783399702577414186/783629225109749770/ss4.gif-1.gif")
   .setThumbnail("https://images-ext-2.discordapp.net/external/V0lgAhtlD5AXMOiI4O0CsGoyQ2UqJDuVlqcmvqDlnhw/%3Fv%3D1/https/cdn.discordapp.com/emojis/744606053982928906.gif")
     .setFooter("🔮 Tüm Hakları Saklıdır.")
  member.guild.channels.cache.get(kanal).send(embed)
})// çıkış mesajı bilmiyoduk salladık kendimiz.

client.on('message', async message => {
 let data = await db.fetch(`kfrengel_${message.guild.id}`)
  if (!data) return;
  if(!message.guild) return;
  let küfürler = require('./küfürler.json')
  let kelimeler = message.content.slice(" ").split(/ +/g)
  if(küfürler.some(kufur => kelimeler.some(kelime => kelime === kufur))) {
  if (message.member.hasPermission("BAN_MEMBERS")) return;
     message.delete()
  if(data.all){
    message.channel.send(`Hey ${message.author}, Bu Sunucuda Küfür Edemezsin! :rage:`).then(x => x.delete({timeout: 6000}))
  } else if(db.get(`kfrengel_${message.guild.id}.${message.channel.id}`)){
       message.channel.send(`Hey ${message.author}, Bu Sunucuda Küfür Edemezsin! :rage:`).then(x => x.delete({timeout: 6000})) 
  }
 }    
});

const isurl = require('is-url')

client.on('message', async message => {
  if(message.author.bot || !message.guild) return;
  let data = db.fetch(`reklamEngel_${message.guild.id}`)
  if(!data) return;
  if (message.member.hasPermission("BAN_MEMBERS"))  return; 
  let reklam = isurl(message.content.toLowerCase().includes)
  if(reklam || message.content.toLowerCase().includes("discord.gg","discord.com","top.gg",".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl",".ga",".cf", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party")) {
  message.delete()
  if(data.all){
    message.channel.send(`Hey ${message.author}, Bu Sunucuda Reklam Yapamazsın! :rage:`).then(x => x.delete({timeout: 6000}))
  } if(db.get(`kfrengel_${message.guild.id}.${message.channel.id}`)){
     message.channel.send(`Hey ${message.author}, Bu Sunucuda Reklam Yapamazsın! :rage:`).then(x => x.delete({timeout: 6000}))
   }
  }
})

// hiç uğraşamam xd
client.on('ready', async () => {
  
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
  
      function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
  
      function cekme(message, array) {
      var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || []
      var cekilenkisi = array[Math.floor(Math.random() * array.length)]
      if (!client.users.cache.get(cekilenkisi.id)) {
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
  
  let dasall = db.all().filter(i => i.ID.startsWith('cekilis_'))
  for (const ii of dasall) {
    const channel = client.channels.cache.get(db.fetch(`${ii.ID}.mesaj.kanal`))
    const mesaj = db.fetch(`${ii.ID}.mesaj.id`)
    const bitecegizamanms = db.fetch(`${ii.ID}.bitecek`)
    const kazanacak = db.fetch(`${ii.ID}.kazanacak`)
    const verilecek = db.fetch(`${ii.ID}.verilecek`)
    const cekilisid = db.fetch(`${ii.ID}.cekilisid`)
    let embed = new Discord.MessageEmbed()
    .setAuthor('🎉 Çekiliş 🎉')
    .setTitle('**' + verilecek + '**')
    .setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** Bekleniyor...`)
    .setFooter(`${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır  | Kalan Süre:`)
    .setTimestamp(bitecegizamanms)
    .setColor("#3f007f")
    if(channel) {
channel.messages.fetch(mesaj).then(async msg => {
  msg.edit(embed)
  const reaction = msg.reactions.cache.first()
                const intervaley = setInterval(async function(){
                if (!db.has(ii.ID)) return clearInterval(intervaley)
                const kalanzaman = bitecegizamanms - Date.now()   
                if (kalanzaman <= 0) {
                  embed.setDescription(`Şanslı Kişi Şeciliyor...`)
                  msg.edit(embed)
                  clearInterval(intervaley)
                  reaction.users.fetch().then(async kasiler => {
                    const gercekkisisayisi = kasiler.size - 1
                    if (gercekkisisayisi < kazanacak) {
                        let embed = new Discord.MessageEmbed()
                        .setAuthor('🎉 Çekiliş Bitti 🎉')
                        .setTitle('**' + verilecek + '**')
                        .setDescription(`Yeterli Katılım Olmadığından Çekiliş İptal Oldu.`)
                        .setFooter(`${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır | Bitti:`)
                        .setTimestamp(bitecegizamanms)
                        .setColor("#3f007f")
                        msg.edit(embed)
                        msg.reactions.removeAll()
                        db.delete(`cekilis_${msg.id}`)
                        let thall = db.all().filter(i => i.ID.includes(msg.id))
                        for (const uu of thall) {
                          db.delete(uu.ID)
                        }
                    }else{
                        var array = reaction.users.cache.array()
                        var ukuk;
                        for (ukuk = 0; ukuk < kazanacak; ukuk++) {
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
                  })
                }else{
                const kalanzamanyazi = destructMS(kalanzaman)
                embed.setDescription(`**Çekilişe Katılmak İçin 🎉 Tepkisine Tıklaman Yeterli Çekişie Kalan Süre: ${kalanzamanyazi}**`)
                msg.edit(embed)
                }
            }, 5000)
         })
    }
  }
})
client.on('messageReactionAdd', async (reaction, user) => {
  let message = reaction.message;
  let tepki = await db.fetch(`react_${message.guild.id}`)
  if(tepki){
tepki.forEach(i => {
    if(reaction.emoji.name !== i.emoji) return;
    if(message.channel.id !== i.kanal) return
    if(message.id !== i.mesaj) return;
   
    message.guild.members.cache.get(user.id).roles.add(i.role);
 })
 }
})
client.on('messageReactionRemove', async (reaction, user) => {
   let message = reaction.message;
  let tepki = await db.fetch(`react_${message.guild.id}`)
  if(tepki){
tepki.forEach(i => {
  console.log(i)
    if(reaction.emoji.name !== i.emoji) return;
    if(message.channel.id !== i.kanal) return
    if(message.id !== i.mesaj) return;
   
    message.guild.members.cache.get(user.id).roles.remove(i.role);
 })
 } 
})
client.on('message', message => {
  if(db.get(`tagalanarol_${message.guild.id}`)){
   let data = db.get(`tagalanarol_${message.guild.id}`); // kodumun botun intentsleri açık değildi bende böyle yaptım
   if(message.author.username.toLowerCase().includes(data.tag)){
     message.member.roles.add(data.rol)
   } else {
     if(message.member.roles.cache.has(data.rol)){
       message.member.roles.remove(data.rol)
     }
   }
  }
})
client.on('channelCreate', async(channel) => {
   if(!db.get(`kanalkoruma_${channel.guild.id}`)) return
 const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
 if(!entry || !entry.executor) return
  channel.delete();
  channel.guild.members.ban(entry.executor.id)
  let kanal = db.get(`modlog_${channel.guild.id}`)
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`**:warning: | \`${channel.id}\` ID'li \`${channel.name}\` Adlı Kanal Oluşturuldu Kanalı Oluşturan Kişiyi Sunucudan Banladım/Sunucudan Yasakladım Yapan Kişinin Bilgileri\nKişi:** ${entry.executor}\n**ID: ${entry.executor.id}\nTag: ${entry.executor.tag}**`)
     .setFooter("✨ Zaman:")
     .setTimestamp()
   return channel.guild.channels.cache.get(kanal).send(bekleaq)
})

client.on('channelDelete', async(channel) => {
      if(!db.get(`kanalkoruma_${channel.guild.id}`)) return
 const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
 if(!entry || !entry.executor) return
channel.clone({
     parent: channel.parentID, 
     position: channel.rawPosition,
     topic: channel.topic, 
     nsfw: channel.nsfw, 
     userLimit: channel.userLimit,
});
   channel.guild.members.ban(entry.executor.id)
  let kanal = db.get(`modlog_${channel.guild.id}`)
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`**:warning: | \`${channel.id}\` ID'li \`${channel.name}\` Adlı Kanal Silidindi Kanalı Oluşturan Kişiyi Sunucudan Banladım/Sunucudan Yasakladım Yapan Kişinin Bilgileri\nKişi:** ${entry.executor}\n**ID: ${entry.executor.id}\nTag: ${entry.executor.tag}**`)
     .setFooter("✨ Zaman:")
     .setTimestamp()
   return channel.guild.channels.cache.get(kanal).send(bekleaq)
})
client.on('roleDelete', async(role) => {
      if(!db.get(`rolkoruma_${role.guild.id}`)) return
 const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
 if(!entry || !entry.executor) return
 await role.guild.roles.create({ data: { name: role.name, color: role.color, hoist: role.hoist, permission: role.permission, mentionable: role.mentionable }, reason: "Rol Silindiği İçin Tekrar Oluştuldu!" })
   role.guild.members.ban(entry.executor.id)
  
  let kanal = db.get(`modlog_${role.guild.id}`)
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`**:warning: | \`${role.id}\` ID'li \`${role.name}\` Adlı Rol Silidindi Rolü Silen Kişiyi Sunucudan Banladım/Sunucudan Yasakladım Yapan Kişinin Bilgileri\nKişi:** ${entry.executor}\n**ID: ${entry.executor.id}\nTag: ${entry.executor.tag}**`)
     .setFooter("✨ Zaman:")
     .setTimestamp()
   return role.guild.channels.cache.get(kanal).send(bekleaq)
})

client.on('roleCreate', async(role) => {
    if(!db.get(`rolkoruma_${role.guild.id}`)) return
 const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
 if(!entry || !entry.executor) return
 await role.guild.roles.create({ data: { name: role.name, color: role.color, hoist: role.hoist, permission: role.permission, mentionable: role.mentionable }, reason: "Rol Silindiği İçin Tekrar Oluştuldu!" })
   role.guild.members.ban(entry.executor.id)
  
  let kanal = db.get(`modlog_${role.guild.id}`)
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`**:warning: | \`${role.id}\` ID'li \`${role.name}\` Adlı Rol Oluşturuldu Rolü Oluşturan Kişiyi Sunucudan Banladım/Sunucudan Yasakladım Yapan Kişinin Bilgileri\nKişi:** ${entry.executor}\n**ID: ${entry.executor.id}\nTag: ${entry.executor.tag}**`)
     .setFooter("✨ Zaman:")
     .setTimestamp()
   return role.guild.channels.cache.get(kanal).send(bekleaq)
})

client.on('guildMemberRemove', async(member) => {
   if(!db.get(`kickkoruma_${member.guild.id}`)) return
  const entry = await member.guild.fetchAuditLogs({type: 'MEMBER_KICK'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor) return
  member.guild.members.ban(entry.executor.id)
  
  
   let kanal = db.get(`modlog_${member.guild.id}`)
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`**:warning: | \`${member.id}\` ID'li \`${member.name}\` Adlı Kullanıcı Atıldı Atan Kişiyi Sunucudan Banladım/Sunucudan Yasakladım Yapan Kişinin Bilgileri\nKişi:** ${entry.executor}\n**ID: ${entry.executor.id}\nTag: ${entry.executor.tag}**`)
     .setFooter("✨ Zaman:")
     .setTimestamp()
   return member.guild.channels.cache.get(kanal).send(bekleaq)
})

client.on('guildBanAdd', async(guild, member) => {
  if(!db.get(`bankoruma_${guild.id}`)) return
 const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
 if(!entry || !entry.executor) return
  guild.members.ban(entry.executor.id)
  member.guild.members.cache.get(member.id).unban()
     let kanal = db.get(`modlog_${guild.id}`)
   const bekleaq = new Discord.MessageEmbed()
     .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
     .setColor("#3f007f")
     .setDescription(`**:warning: | \`${member.id}\` ID'li \`${member.name}\` Adlı Kullanıcı Yasaklandı Yasaklayan Kişiyi Sunucudan Banladım/Sunucudan Yasakladım Yapan Kişinin Bilgileri\nKişi:** ${entry.executor}\n**ID: ${entry.executor.id}\nTag: ${entry.executor.tag}**`)
     .setFooter("✨ Zaman:")
     .setTimestamp()
   return guild.channels.cache.get(kanal).send(bekleaq)
  
})

client.login('')