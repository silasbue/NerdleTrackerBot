const Discord = require("discord.js");
require("dotenv").config()

const client = new Discord.Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
  if (message.content.startsWith('nerdlegame')) {
    message.reply('i recognise this message as a nerdle message')
  }
})

client.login(process.env.TOKEN)
