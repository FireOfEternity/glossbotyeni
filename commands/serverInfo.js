 
const {MessageEmbed} = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'sunucubilgi',
   run: async(client, message, args) => {
  let tarih = new Date(message.guild.createdTimestamp)
 let botsize = message.guild.members.cache.filter(s => s.user.bot).size
  const embed = new MessageEmbed() 
   .setColor("#3f007f")
   .setTitle(message.guild.name, true)
   .addField("Sunucu İsmi", message.guild.name, true)
   .addField("ID", message.guild.id, true)
  .addField("Oluşturulma tarihi:", `${tarih.getUTCDate()}-${tarih.getUTCMonth()}-${tarih.getUTCFullYear()} ${tarih.getHours()}-${tarih.getUTCMinutes()}-${tarih.getUTCSeconds()}`, true)
   .addField("Sunucu sahibi:", message.guild.owner.user.username, true)
   .addField("Sunucu konum:", 
             message.guild.region == "europe" ? 'Avrupa' :
             message.guild.region == "brazil" ? 'Brezilya' :
             message.guild.region == "hongkong" ? undefined : // clone bunu gerektirir xD (Onlarda Yoktu)
             message.guild.region == "india" ? 'Hindistan' :
             message.guild.region == "russia" ? 'Rusya' :
             message.guild.region == "singapore" ? 'Singapur' :
             message.guild.region == "southafrica" ? undefined :
             message.guild.region == "sydney" ? 'Sidney' :
             message.guild.region == "us-central" ? 'Amerika merkez' :
             message.guild.region == "us-east" ? 'Doğu Amerika' :
             message.guild.region == "us-south" ? 'Güney Amerika' :
             message.guild.region == "us-west" ? 'Batı Amerika' :
             message.guild.region == "japan" ? 'Japonya' : message.guild.region 
             
             
             , true)
   .addField("Üye sayısı:", message.guild.memberCount - botsize, true)
   .addField("Bot sayısı:", botsize, true)
   .addField("Kanal sayısı:", message.guild.channels.cache.size, true)
   .addField("Sevişme kanalı sayısı:", message.guild.channels.cache.filter(s => s.type == "text").size, true)
   .addField("Ses kanalı sayısı:", message.guild.channels.cache.filter(s => s.type == "voice").size, true)
   .addField("Afk kanalı:", message.guild.afkChannelID || "Yok", true)
   .addField("Afk süre aşımı:", message.guild.afkTimeout, true)
   .addField("Sunucu doğrulama seviyesi:", 
      message.guild.mfaLevel == 0 ? 'Aktif değil' :
      message.guild.mfaLevel == 1 ? 'Düşük düzey' :
      message.guild.mfaLevel == 2 ? 'Normal düzey' :
      message.guild.mfaLevel == 3 ? 'Üst düzey' :
      message.guild.mfaLevel == 4 ? 'En üst düzey': message.guild.mfaLevel, true)
   .addField("Sunucu sakıncalı medya içerigi filtresi:",
      message.guild.explicitContentFilter == "DISABLED" ? 'Aktif değil' : 
      message.guild.explicitContentFilter == "MEMBERS_WITHOUT_ROLES" ? 'Orta düzey' :
      message.guild.explicitContentFilter == "ALL_MEMBERS" ? 'Üst düzey' : 'Aktif değil', true)
   .addField("Sunucu discord tarafından onaylımı?:", message.guild.verified == false ? 'Hayır' : 'Evet', true)
   .addField("Sunucu boostlanma sayısı:", message.guild.premiumSubscriptionCount, true)
   .addField("Emoji sayısı:", message.guild.emojis.cache.size, true)
   .setThumbnail(message.guild.iconURL({dynamic: true}))
   .setFooter("Gloss Sunucu bilgi sistemi.", message.guild.iconURL({ dynamic: true }))
   .setTimestamp()
   message.channel.send(embed)
  }
}
