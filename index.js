const Discord = require("discord.js");
const fs = require("fs");
const data = require("./data.json")
require("dotenv").config()

const client = new Discord.Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
  if (message.content.startsWith('nerdlegame')) {
    if (!scores[message.author]) {
      scores[message.author] = 0
    }
    let strArr = message.content.split("/")
    let tries = strArr[0]
    tries = Number(tries[tries.length-1])
    console.log(tries);

    scores[message.author] += tries

    saveScoreboard(scores);

    message.reply(`Submitted! Your total score since last reset: ${scores[message.author]}`);
  }
})

function saveScoreboard(scoreboard){
  fs.writeFile('data.json', JSON.stringify(scoreboard), (err) =>{
    if (err) {
      throw new err;
    }
    console.log('JSON data was stored!');
  })
}

client.login(process.env.TOKEN);
scores = data
console.log(scores);

