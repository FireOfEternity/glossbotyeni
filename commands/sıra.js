const db = require('quick.db')
var Canvas = require('canvas')
const path = require('path');  
 var Discord = require('discord.js')
 const request = require('node-superfetch');
module.exports = {
   name: 'sıra',
   run: async(client, msg, args) => {

  let u = msg.mentions.users.first() ||  msg.guild.members.cache.get(args[0]) || msg.author
// bu bölüm ile pek uğraşmadım siktir edin
  // sonuçta bizimki çalışıyor qwe.qwe

  var Canvas = require('canvas')
        var canvas = Canvas.createCanvas(934, 282)
        var ctx = canvas.getContext('2d');
        const avatarURL = u.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 })
        const durum = u.presence.status;
        const { body } = await request.get(avatarURL);
        const avatar = await Canvas.loadImage(body);


     const rs = await request.get("https://cdn.discordapp.com/attachments/770993786628341761/783458196827144232/sra.png");
     const resim = await Canvas.loadImage(rs.body);
     ctx.drawImage(resim, 0, 0, 934, 282); 
  

  
        var re = db.fetch(`${u.id}.renk`) || "ffffff"
  
  var xp = db.get(`levels.${u.id}.xp`)
  var lvl = db.fetch(`levels.${u.id}.level`);  

        let sira = ''
        const sorted = msg.guild.members.cache.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`levels.${b.user.id}.level`) - db.fetch(`levels.${a.user.id}.level`) });
        const top10 = sorted.splice(0, msg.guild.members.cache.size)
        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < msg.guild.members.cache.size; i++) {
                if(mappedID[i] === u.id) {
                        sira += `${i + 1}`
                }
        }

        var de = 2.4
        ctx.beginPath()
        ctx.fillStyle = "#484B4E";
        ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 147.5 + 36.15, 250 * de, 37.5);
        ctx.arc(257 + 18.5 + 250 * de, 147.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `#${re}`;
        ctx.arc(257 + 18.5, 147.5 + 18.5 + 35.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 147.5 + 35.25, xp * 0.1, 37.5);
        ctx.arc(257 + 18.5 + xp * 0.1, 147.5 + 18.5 + 35.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = `#${re}`;
        ctx.font = '35px FF DIN';
        ctx.textAlign = "right";
        ctx.fillText(`RANK ${sira}       LEVEL ${lvl || 0}`, 875, 70);
        ctx.font = '20px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp || 0} / 155 XP`, 875, 100);
        ctx.fillStyle = `#ffffff`;
        ctx.font = '40px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 270, 150)
        ctx.beginPath();
        ctx.lineWidth = 8;

        ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(50 + 80, 80 + 70, 70, 0, 2 * Math.PI, false);
        ctx.clip();
        ctx.drawImage(avatar, 50, 70, 160, 160);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "sra.png");
        msg.channel.send(attachment)
   }
}
