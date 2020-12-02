 
const {MessageEmbed} = require('discord.js')
const moment = require('moment');
require("moment-duration-format")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'kullanıcıbilgi',
   run: async(client, message, args) => {
  const kişi = message.mentions.members.first() || message.author //eyw
  let botmu;
  if(kişi.bot === true) {
    botmu = "Evet"
  } else {
    botmu = "Hayır"
  }
     
  
     let oynuyor;
if((kişi.presence.activities.length != 0) && (kişi.presence.activities[0].name == "Custom Status")) {
  oynuyor = `${kişi.presence.activities[0].state || `Sadece Emoji Bulunuyor !`}`;
} else if(kişi.presence.activities.length != 0) {
  oynuyor = kişi.presence.activities[0].name;
}else{
  oynuyor = "Herhangi Bir Oynuyoru Yok"
}
     const member = message.guild.member(kişi.id)
     const millisJoined = new Date().getTime() - member.joinedAt.getTime();
     const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")

var durum = ''
  if (kişi.presence.status === "dnd") {
  var durum = 'Rahatsız Etmeyin'
  }
  if (kişi.presence.status === "offline") {
  var durum = 'Görünmez / Çevrimdışı'
  }
  if (kişi.presence.status === "idle") {
  var durum = 'Boşta'
  }
  if (kişi.presence.status === "online") {
  var durum = 'Aktif'
  }
     
     var tarih = ''
            if(moment(kişi.createdAt).format('MM') === '01') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Ocak ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '02') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Şubat ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '03') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Mart ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '04') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Nisan ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '05') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Mayıs ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '06') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Haziran ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '07') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Temmuz ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '08') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Ağustos ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '09') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Eylül ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '10') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Ekim ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '11') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Kasım ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.createdAt).format('MM') === '12') {
                var tarih = `${moment(kişi.createdAt).format('DD')} Aralık ${moment(kişi.createdAt).format('YYYY HH:mm:ss')} `
            }
     
     var tarih2 = ''
            if(moment(kişi.joinedAt).format('MM') === '01') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Ocak ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '02') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Şubat ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '03') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Mart ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '04') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Nisan ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '05') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Mayıs ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '06') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Haziran ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '07') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Temmuz ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '08') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Ağustos ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '09') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Eylül ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '10') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Ekim ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '11') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Kasım ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(kişi.joinedAt).format('MM') === '12') {
                var tarih2 = `${moment(kişi.joinedAt).format('DD')} Aralık ${moment(kişi.joinedAt).format('YYYY HH:mm:ss')} `
            }
     
  const bekleniyor = new MessageEmbed() 
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .addField("Kullanıcı adı:", kişi.username)
   .addField("Kullanıcı tagı:", kişi.tag)
   .addField("Kullanıcı ID:", kişi.id)
   .addField("Kullanıcı #:", "#" + kişi.discriminator)
   .addField("Kullanıcı botmu:", botmu)
   .addField("Kullanıcı oluşturulma tarihi:", tarih)//2020-Eylül-25 07:53:29
   .addField("Son mesajı:", kişi.lastMessage)
   .addField("Son mesaj attıgı kanal", "<#" + kişi.lastMessageChannelID + ">")
   .addField("Kullanıcı durum:", durum)
   .addField("Kullanıcı durum mesajı", oynuyor)
   .addField("Rolleri:", message.guild.members.cache.get(kişi.id).roles.cache.filter(s => s.id !== message.guild.id).map(s => `<@&${s.id}>`).join("\n") || "Rolü Yok!")
   .addField("Sunucuya girme zamanı:", tarih2)
   .setImage(kişi.displayAvatarURL({ dynamic: true }))
   .setFooter("Gloss Kullanıcı bilgi sistemi.", message.guild.iconURL({ dynamic: true }))
   .setTimestamp()
   message.channel.send(bekleniyor)
  }/* 
Kullanıcı durum:
Aktif değil
Kullanıcı durum mesajı
Yok
Rolleri:
@👑・Genel Kurucu
@everyone
Sunucuya girme zamanı:
2020-Kasım-23 09:01:34
  */
}// dur bi