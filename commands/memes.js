exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    var embed = new Discord.MessageEmbed()
    .setTitle("Guys, please...")
    .setImage("https://media.makeameme.org/created/guys-please-keep.png")
    .setColor("2f3136")
    message.channel.send(embed)
    message.delete()
};