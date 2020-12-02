 
const {MessageEmbed} = require('discord.js')
const db = require("quick.db")
// kodumun oruspu çocukları xD
// Sizin yaptığınız botlar bizi tutamaz

module.exports = {
   name: 'otorol',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let role = message.mentions.roles.first()
    let dataRole = db.get(`otorol_${message.guild.id}.roles`)
    if(args[0] == "rol"){ 
    if(!role){
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Yanlış Kullanım ?otorol rol @rol**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
     }
    if(dataRole && dataRole.length >= 15){
   const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Rol Ekleme Sınırına Ulaştınız :warning:**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
    }
      db.push(`otorol_${message.guild.id}.roles`, role.id)
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Otorol Rolü** \`${role.name}\` **Olarak Ayarlandı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion)   
   }
    
    if(args[0] == "kanal"){
     let kanal = message.mentions.channels.first();
     if(!kanal){
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Yanlış Kullanım ?otorol kanal #kanal**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
     }
      db.set(`otorol_${message.guild.id}.channel`, kanal.id)
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:yess22: | Otorol Kanalı** \`${kanal.name}\` **Olarak Ayarlandı**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(motion)   
    }
     
    if(args[0] == "liste"){
    let dataChannel = db.get(`otorol_${message.guild.id}.channel`)

    let botRole = db.get(`otorol_${message.guild.id}.botrole`)
     if(!dataChannel && dataRole.length > 0){ 
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Kanal Veya Rol Ayarlanmamış**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
     }
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`:709419603784368258: **Otorol Kanalı:** <#${dataChannel}>`)
      .addField("Roller;",dataRole.length > 0 ? dataRole.map((data, i) => `\`${i + 1}.\` **<@&${data}>**`) : "**Ayarlanmamış**")
      .addField("Bot Rolleri;", botRole ? `**<@&${botRole}>**` : "**Ayarlanmamış**")
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
    }
     
    if(args[0] == "bot-rol"){
    if(!role){
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:no2: | Yanlış Kullanım ?otorol bot-rol @rol**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
     }
     db.set(`otorol_${message.guild.id}.botrole`, role.id)
    const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(`**:yess22: | Bot Rolü Başarıyla ${role} Olarak Ayarlandı**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(motion)   
    }
     
   if(args[0] == "kapat"){
     db.delete(`otorol_${message.guild.id}`)
   const motion = new MessageEmbed()
    .setColor("#3f007f")
    .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
    .setDescription(`**:yess22: | Otorol Başarıyla Sıfırlandı**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    return message.channel.send(motion) 
   }  
     
     
     
  const yanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: **| Yanlış Kullanım: ?otorol rol/kanal/liste/bot-rol/kapat**")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
  if(!args[0]) return message.channel.send(yanlış)
   
  }
}