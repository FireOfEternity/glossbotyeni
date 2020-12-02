const db = require('quick.db');
const Discord = require('discord.js')

module.exports = {
   name: 'yardım',
   run: async(client, message, args) => {
  
     if(args[0] === "bilet-sistemi") {
       const motion = new Discord.MessageEmbed()
.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setTitle(`:gem: **Gloss - Bilet Sistemi Menüsü**`)
.setDescription(`

Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.

║════════════════════════════║

:white_small_square: \`?bilet-kurulum • ?bilet-kurulum #kanal\` **=> Bilet Sistemini Ayarlarsınız Yani Ticket.**

**» Linkler**
[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=700608702427955270&scope=bot&permissions=8) | [Gloss Support](https://discord.gg/pinkcode)
`)
.setFooter(`Gloss | Sizler İçin Burdayım!`)
       return message.channel.send(motion)
}
  

//
 if(args[0] === "koruma") {
       const motion = new Discord.MessageEmbed()
.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setTitle(`:gem: **Gloss - Yedek Sistemi Menüsü**\n`) 
.setDescription(`

Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.

║════════════════════════════║

:white_small_square: \`?ban-koruması • ?ban-koruması aç • ?ban-koruması kapat\`  **=> Ban Korumasını Açar/Kapatır - Sunucunuzdan Üye Banlanılırsa Yapan Kişiyi Sunucudan Banlar (Sunucu Sahibi Hariç)**

:white_small_square: \`?kick-koruması • ?kick-koruması aç • ?kick-koruması kapat\` **=> Kick Korumasını Açar/Kapatır - Sunucunuzdan Üye Kicklenirse Yapan Kişiyi Sunucudan Banlar (Sunucu Sahibi Hariç)**

:white_small_square: \`?rol-koruması • ?rol-koruması aç • ?rol-koruması kapat\` **=> Rol Korumasını Açar/Kapatır - Suncuda Rol Oluşturduğunda/Sildiğinde İşlemi Geri Alır Ve Birşey Yapamaz Ve Yapan Kişi Banlanır. (Sunucu Sahibi Hariç)**

:white_small_square: \`?kanal-koruması • ?kanal-koruması aç • ?kanal-koruması kapat\` **=> Kanal Korumasını Açar/Kapatır - Suncuda Kanal Oluşturduğunda/Sildiğinde İşlemi Geri Alır Ve Birşey Yapamaz Ve Yapan Kişi Banlanır. (Sunucu Sahibi Hariç)**

**» Linkler**
[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=700608702427955270&scope=bot&permissions=8) | [Gloss Support](https://discord.gg/pinkcode)
`)
.setFooter(`Gloss | Sizler İçin Burdayım!`)      
  return message.channel.send(motion)
    }
  

  
  if(args[0] === "yedek-sistemi") {
       const motion = new Discord.MessageEmbed()
.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setTitle(`:gem: **Gloss - Yedek Sistemi Menüsü**\n`) 
.setDescription(`

Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.

║════════════════════════════║

:white_small_square: \`?yedek\`  **=> Yedek Sistemi Hakkında Bilgi Alırsınız.**

:white_small_square: \`?yedek oluştur\` **=> Hangi Sunucuda Komutu Kullandıysanız O Sunucunun Yedeğini Alır ( __Yönetici İzniniz Olması Lazım__ )**

:white_small_square: \`?yedek yükle <ID>\` **=> Yedek Oluşturdğunuzda Size Verilen ID Yi Yazdığınızda Sunucuyu Başka Yere Yüklsersiniz. ( __Yönetici İzniniz Olması Lazım__ )**

**» Linkler**
[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=700608702427955270&scope=bot&permissions=8) | [Gloss Support](https://discord.gg/pinkcode)
      `)
.setFooter(`Gloss | Sizler İçin Burdayım!`) 
      return message.channel.send(motion)
    }
  

  
  if(args[0] === "moderasyon") {
       const motion = new Discord.MessageEmbed()
.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setTitle(`:gem: **Gloss - moderasyon Menüsü**\n`)
.setDescription(`

Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.

║════════════════════════════║

▫️ \`?ban <@kişi <sebep>\` **=> Etiketlediğiniz Kişiyi Bir Sebeple Banlarsınız.**

▫️ \`?kick <@kişi>\` **=> Etiketlediğiniz Kişiyi Sunucudan Atarsınız.**

▫️ \`?sil <sayı>\` **=> Belirtiğiniz Sayı Kadar Mesaj Siler.**

▫️ \`?sa-as aç • ?sa-as kapat\` **=> Sa - As Sistemini Açar Veya Kapatırsınız.**

▫️ \`?küfürengel • ?küfürengel #kanal • ?küfürengel hepsi • ?küfürengel kapat\`  **=> Etiketlediğiniz Kanalda Küfür Engel Sistemi Açılır.**

▫️ \`?reklamengel • ?reklamengel #kanal • ?reklamengel hepsi • ?reklamengel kapat\`  **=> Etiketlediğiniz Kanalda Reklam Engel Sistemi Açılır.**

▫️ \`?sayaç • ?sayaç ayarla • ?sayaç sıfırla\` **=> Sayaç Sistemini Ayarlarsınız.**

▫️ \`?otorol • ?otorol @rol #kanal • ?otorol bot-rol @rol • ?otorol kapat\`  **=> Otorol Sistemi Ayarlarsınız.**

▫️ \`?yasaklı-kelime • ?yasaklı-kelime ekle <kelime> • ?yasaklı-kelime liste • ?yasaklı-kelime kaldır\` **=> Yasaklı Kelime Eklersiniz Ve O Kelime Sunucuda Söylendiğinde O Kişiyi Uyarır Ve Mesajı Siler.**

▫️ \`?mute • ?mute at @kişi • ?mute kaldır @kişi\` **=> Bir Kişiye Mute Atarsınız Veya Kaldırırsınız.**

▫️ \`?kayıt • ?kayıt ayarla #kanal @rol • ?kayıt sıfırla • ?kayıt ol Yaş İsim\` **=> Kayıt Sistemini Ayarlarsınız Veya Sıfırlarsınız.**

▫️ \`?spamengel • ?spamengel aç • ?spamengel kapat\` **=> Spam Engeli Açarsınız Veya Kapatırsınız.**

▫️ \`?ototag • ?ototag aç • ?ototag kapat\` **=> Oto Tagı Açarsınız Veya Kapatırsınız.**

▫️ \`?rolkomut kapat\` **=> Rol Komut Ayarlarsınız.**

▫️ \`?tepki-rol\` **=> Tepki Rolü Ayarlarsınız.**
**» Linkler**
[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=700608702427955270&scope=bot&permissions=8) | [Gloss Support](https://discord.gg/pinkcode)
       `)
.setFooter(`Gloss | Sizler İçin Burdayım!`)      
await message.channel.send(motion).then(s => {
const embed = new Discord.MessageEmbed()
.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setDescription(`

:white_small_square: \`?giriş-çıkış • ?giriş-çıkış ayarla #kanal • ?giriş-çıkış sıfırla\` **=> Gelen & Gideni Ayarlarsınız.**

:white_small_square: \`?çekiliş • ?çekiliş yap\` **=> Sunucunuzda Çekiliş Yaparsınız.**

:white_small_square: \`?sunucu-kur • ?sunucu-kur normal/kod/botlist/kod-botlist\` **=> Sunucunuzda Çekiliş Yaparsınız.**

:white_small_square: \`?selfbot • ?selfbot aç/kapat\` **=> Self Bot Korumasını Aktive Eder Yeni Açılan Hesapları Avatarı Olmayan Kullanıcı Vs.**

:white_small_square: \`?tag-alınca-rol • ?tag-alınca-rol ayarla/sıfırla\` **=> Sunucudaki Üyeleriniz Tagınızı Alınca Rol Verir (Botun Intentleri Yani Discord APISI Bir Şeye İzin Vermiyor Şu Anlık Bir Şey Yaramaz :cry:).**

`)   
 .setFooter(`Gloss | Sizler İçin Burdayım!`)

 
return message.channel.send(embed)
    })
}
  
  if(args[0] === "kullanıcı") {
       const motion = new Discord.MessageEmbed()
.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setTitle(`:gem: **Gloss - Kullanıcı Menüsü**\n`)
.setDescription(`

Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.

║═════════════════════════════════════║

:white_small_square: \`?avatar • ?avatar @kişi\` **=> İstediğiniz Kişinin Avatarını Gösterir.**

:white_small_square: \`?ping\` **=> Botun Pingini Gösterir.**

:white_small_square: \`?istatistik\` **=> Botun İstatistiğini Gösterir.**

:white_small_square: \`?kullanıcı-bilgi • ?kullanıcı-bilgi @kişi\`  **=> Kendi Bilgilerinize Bakarsınız - Etiketledğiniz Kişinin Bilgilerina Bakarsınız.**

:white_small_square: \`?sunucu-bilgi\` **=> Sunucu Bilgisine Bakarsınız.**

:white_small_square: \`?davet\` **=> Botun Davet Linkini Alırsınız.**

:white_small_square: \`?uptime\` **=> Site Vb. Şeyleri Uptimelersiniz.**

║════════════════════════════║

:white_small_square: \`?öneri-yap\` **=> Bota İstediğiniz Şeyin Önerisini Yaparsınız.**

:white_small_square: \`?bug-bildir\` **=> Bot Üzerindeki Bugları Bildirirsiniz.**

**» Linkler**
[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=700608702427955270&scope=bot&permissions=8) | [Gloss Support](https://discord.gg/pinkcode)
`)
.setFooter(`Gloss | Sizler İçin Burdayım!`)
       return message.channel.send(motion)
    }
  

const motion = new Discord.MessageEmbed()

.setColor("#3f007f")
.setThumbnail("https://cdn.discordapp.com/attachments/778238163826900993/778654507944378398/31504ef441a60bf30ac38ecb522f7afb.webp")
.setTitle(`:gem: **Gloss - Yardım Menüsü**`)
.setDescription(`

Merhaba <@${message.author.id}> Botumuzun Destek Sunucusuna Gelmeyi Unutmayın.

║════════════════════════════║

<:saas:782994251486986300> **Gloss Bot Bilgileri;**
<:saas:782994251486986300> **Prefix : __?__**
<:saas:782994251486986300> **Bot Dili : __TR__** :flag_tr:
<:saas:782994251486986300> **Bot Ping : __${client.ws.ping}__**

║════════════════════════════║

:hammer: **Moderasyon Komutlarını Görmek İçin \`?yardım moderasyon\` yazın.**

:bust_in_silhouette: **Kullanıcı Komutlarını Görmek İçin \`?yardım kullanıcı\` yazın.**

:shield: **Koruma Komutlarını Görmek İçin \`?yardım koruma\` yazın.**

:clipboard: **Yedek Sistemi Komutlarını Görmek İçin \`?yardım yedek-sistemi\` yazın.**

:tickets: **Bilet Sisteminin Komutlarını Görmek İçin \`?yardım bilet-sistemi\` yazın.**

**» Linkler**
[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=700608702427955270&scope=bot&permissions=8) | [Gloss Support](https://discord.gg/pinkcode)
`)
.setFooter(`Gloss | Sizler İçin Burdayım!`)

if(!args[0]) return message.channel.send(motion)


  }
}
