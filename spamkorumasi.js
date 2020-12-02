const Discord = require("discord.js");
var MessageData = [];
module.exports = (client, msg) => {

 if (msg.member.hasPermission("BAN_MEMBERS")) return
    
  if (MessageData[msg.author.id] === undefined) {
    MessageData[msg.author.id] = { MesssageNumber: 0, LastMessage: [] };
    setTimeout(() => {
      delete MessageData[msg.author.id];
    }, 4000);
  }
  MessageData[msg.author.id].MesssageNumber += 1;

  MessageData[msg.author.id].LastMessage.push(msg);


  if (MessageData[msg.author.id].MesssageNumber >= 5) {
    if (msg.deletable) msg.delete();
      const sendeddd = new Discord.MessageEmbed()
        .setColor("#3f007f")
      .setAuthor("Gloss", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
        .setDescription(msg.author.tag + " **\`Spam Yapmayı Kes Yoksa Susturulursun!\`**")
    msg.channel.send(sendeddd).then(stopspam => {
        setTimeout(() => {
          stopspam.delete();
        }, 7000);
      });
    var isFine = false;
    MessageData[msg.author.id].LastMessage.forEach(msgg => {
      if (msg.channel.id == msgg.channel.id) {
        if (msg.content == msgg.content) {
          isFine = true;
        } else {
          isFine = false;
        }
      }
    });
    if (isFine) {

        const spambed = new Discord.MessageEmbed()

          .setColor("#3f007f")
       .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
        .setDescription(msg.author.tag + " **\`Sana Spam Yapmayı Kes Yoksa Susturulursun Demiştim!\`**")
        msg.channel.send(spambed);
        msg.channel.bulkDelete(5);
        msg.channel.createOverwrite(msg.author.id, {
                SEND_MESSAGES: false
});
      }
    }
  if (MessageData[msg.author.id] >= 3) {
    if (msg.deletable) msg.delete();
     msg.channel.bulkDelete(8);
      const spambed = new Discord.MessageEmbed()
        .setColor("#3f007f") 
      .setAuthor("Gloss Bot", "https://images-ext-2.discordapp.net/external/upcVsk1w8rbo_jfrfun5j4Fi0YCd25WPM9pu4SG-NQs/https/cdn.discordapp.com/avatars/726040861602742324/ff5a9e9abdd36d5f2effcfd9876527e2.webp")
      .setDescription(msg.author.tag + " **\`Sana Spam Yapmayı Kes yoksa Susturulursun Demiştim!\`**");
      msg.channel.send(spambed);
      msg.channel.createOverwrite(msg.author.id, {
                SEND_MESSAGES: false,
        
});
    }
  

};