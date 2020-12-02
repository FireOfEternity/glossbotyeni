 
const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
require('moment-duration-format')
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'liderlik',
   run: async(client, message, args) => {

  const verileraq = db.get("levels") || {};
    
   const levels = Object.keys(verileraq).map(veriişte => { 
      return {
        "id": veriişte,
        "level": verileraq[veriişte].level || 0,
        "xp": verileraq[veriişte].xp || 0
      }
   }).sort((x, y) => y.level - x.level); // bilen anlıyor zaten çakma kodcular ise bu ne aq
     
  let anasikim = [] 
   for(var i in levels){
     let user = await client.users.fetch(levels[i].id);
     anasikim.push({id: levels[i].id,  name: user.username, level: levels[i].level, xp: levels[i].xp})
   }
     const embed = new MessageEmbed()
     .setColor("#3f007f")
     .setTitle("Seviye Sıralama")
     var i = 0;
  await anasikim.forEach(async s => { 
     await embed.addField(`${i + 1}. ${s.name}`, `**Level** - ${s.level || 0}\n**XP** - ${s.xp} / 100}`)  
    })
     let index = anasikim.map(s => s.id).indexOf(message.author.id)
     embed.setFooter("Senin Sıran: "+ Number(index + 1))
    message.channel.send(embed)
  }
} 
