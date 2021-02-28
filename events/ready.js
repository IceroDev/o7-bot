module.exports = (client) => {
  const Discord = require("discord.js");
  const axios = require("axios");
  client.channels.cache.get("788420999871070228").messages.fetch("788425388187058196").then(m =>{
    setInterval(async () => {
      axios
        .get('https://epistat.sciensano.be/Data/COVID19BE_CASES_MUNI_CUM.json')
        .then(response => {
          let cas = response.data[363].CASES
        let embed = new Discord.MessageEmbed()
        .setTitle("Cas de covid-19 à Tournai ")
        .setDescription("C'est rien, c'est Tournai")
        .addField("\u200b", "__**"+cas+"**__ imbéciles ont déjà chopé la covid-19. Alors mets ton masque bordel !")
        
        .setFooter("Dernière actualisation des données ")
        .setTimestamp()
        .setThumbnail("https://flespi.io/covid19/img/android-icon-192x192.a7ab640c.png")
        .setImage("https://www.visitwapi.be/pivotimg/0/0/aHR0cDovL2lkZXRhLmJveGdtdC5uZXQvZmlsZXMvQU5YLTAyLTAzUzItMDAwMS9BTlgtMDItMDNTMi0wMDAxLmpwZw==.jpg")
        .setColor("2f3136");
            m.edit(embed)
          })
    }, 1800000);
  })
}
