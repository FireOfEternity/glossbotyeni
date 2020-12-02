
const {MessageEmbed} = require('discord.js')


module.exports = {
   name: 'avatar',
   run: async(client, message, args) => {
     
  const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const avatar = new MessageEmbed()
  .setColor("#3f007f")
  .addField(`${user.tag}`, `**[\`WEBP\`](${user.displayAvatarURL({ dynamic: true, format: "webp" })})** **・** **[\`PNG\`](${user.displayAvatarURL({ dynamic: true, format: "png" })})** **・** **[\`JPG\`](${user.displayAvatarURL({ dynamic: true, format: "jpg" })})**`)
  .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
  .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  return message.channel.send(avatar)
     
  }
}