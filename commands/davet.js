 
 
const {MessageEmbed} = require('discord.js')

// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz
// ali istatsitik kodunu aldın demi ibne görmedimki hiç istatistiklerini yaparım yok lan benim yaptığım projeye geldiğinde
module.exports = {
   name: 'davet',
   run: async(client, message, args) => {
//no almadım hiç (ibne yalanı derler buna)
     //vallaha aq
const motion = new MessageEmbed()

.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setDescription(`**Gloss Botu Ekleyerek Sunucularınızı 7/24 Güvende Tutun. Sunucuların Glossa Emanet Edin. Link Aşşağıda.**

[Botu Davet Et](https://discord.gg/pinkcode)`)
.setFooter(`Gloss Davet sistemi.`)
return message.channel.send(motion)
     
   }
}