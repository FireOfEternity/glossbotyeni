
const {MessageEmbed} = require('discord.js')
const { Client, Util, Message } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");

var backups = JSON.parse(fs.readFileSync("./Data/backups.json", "utf8"));


module.exports = {
   name: 'yedek',
   run: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR")) return;
     if(!message.guild.members.cache.get(client.user.id).hasPermission("ADMINISTRATOR")) return;
if (args[0] === "oluştur") {
  let id = makeid(25); // sayı uzunluğu siz belirleyin

   const channels = message.guild.channels.cache.sort(function(a, b) { return a.position - b.position; }).array().map(c => {
      const channel = { 
        type: c.type, 
        name: c.name, 
        position: c.calculatedPosition,
      };
      if (c.parent) channel.parent = c.parent.name;
       return channel;
   });

 const roles = message.guild.roles.cache.filter(r => r.name !== "@everyone").sort(function(a, b) {
        return a.position - b.position;
 }).array().map(r => {
   const role = { 
     name: r.name, 
     color: r.color, 
     hoist: r.hoist, 
     permissions: r.permissions, 
     mentionable: r.mentionable,
     position: r.position 
   };
    return role; 
 }); 

 if (!backups[message.author.id]) backups[message.author.id] = {};
    backups[message.author.id][id] = {
            icon: message.guild.iconURL(),
            name: message.guild.name,
            owner: message.guild.ownerID,
            members: message.guild.memberCount,
            createdAt: message.guild.createdAt,
            roles,
            channels
     }; save();
    
 const okey = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(`:yess22: **|** ${message.guild.name} **Adlı Sunucu** ` + id + ` **ID Si İle Yedek Yüklenecek** ${message.author}**!** `)
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
 message.channel.send(okey)
  
   const dmMesaj = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(`:yess22: **| ${message.guild.name} Adlı Sunucu ${id} ID Si İle Yedek Yüklenecek** ${message.author}**!** `)
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
 return message.author.send(dmMesaj)
}
     
if (args[0] === "yükle") {

  let code = args[1];
  if(!code){
   const yokkiAmq = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(`:no2: **| Yanlış Kullanım ?yedek yükle ID**`)
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
  return message.channel.send(yokkiAmq)
 }// hm
  console.log(backups)
 if (!backups[message.author.id][code]){
   const yokkiAmq = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(`:no2: **| Yedekleme ID Sana Ait Değil/Böyle Bir ID Bulunamadı**`)
   .setFooter("🔮 Tüm Hakları Saklıdır.") // aynı mantık adamın id ile alıyor zaten xd  
  return message.channel.send(yokkiAmq) // hem adamların sistem bile çalışmıyor siktir et
 }
  message.guild.channels.cache.forEach(async function(channel) { await channel.delete(); });
        
  message.guild.roles.cache.filter(role => role.members.every(member => !member.user.bot)).forEach(async function(roles) { await roles.delete(); }); 

  await backups[message.author.id][code].roles.forEach(async function(role) {
     message.guild.roles.create({ data: { 
          name: role.name,
          color: role.color,
          permissions: role.permissions,
          hoist: role.hoist,
          mentionable: role.mentionable,
          position: role.position
       }, reason: "AmGloss Yedek sistemi" })
   });

 await backups[message.author.id][code].channels.filter(c => c.type == "category").forEach(ch => { 
      message.guild.channels.create(ch.name, {type: ch.type, permissionOverwrites: ch.permissionOverwriteArray });
  }); 
                                    
  await backups[message.author.id][code].channels.filter(c => c.type !== "category").forEach(ch => {
       message.guild.channels.create(ch.name,{ type: ch.type, permissionOverwrites: ch.permissionOverwriteArray}).then(c => {
         const parent = message.guild.channels.cache.filter(c => c.type == "category").find(c => c.name === ch.parent);
         c.setParent(parent).catch(err => { throw err; }) 
       });
  });
     message.guild.setName(backups[message.author.id][code].name);
     message.guild.setIcon(backups[message.author.id][code].icon);
}  
     
     
 const yanlış = new MessageEmbed()
   .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/-RWF8FxCl1_suHP-4z42B5NbaTo2AC87gavKiwRKAm0/https/cdn.discordapp.com/avatars/726040861602742324/fbc93363fa51e48e63ddd314d2c9948b.webp")
   .setColor("#3f007f")
   .setDescription(":no2: **| Yanlış Kullanım ?yedek oluştur/yükle**")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
if(!args[0]) return message.channel.send(yanlış)  
     
    function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }

      function save() {
        fs.writeFile("./Data/backups.json", JSON.stringify(backups), err => {
          if (err) {}
        });
      }
        
  }
}

