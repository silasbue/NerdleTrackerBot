# NerdleTrackerBot

Discord Nerdle Tracker Bot

## Early Dev Setup Guide

### Create your own discord bot

1. Create a new application on [discord developer portal.](https://discord.com/developers/applications)
2. Go to the *bot* page on the application site and create a new bot.
3. Click the *reset token* button and copy the token to the clipboard.
4. Scroll down and turn on the *MESSAGE CONTENT INTENT* and *SERVER MEMBERS INTENT* sliders.
5. Go to *OAuth2 > URL generator* on the site.
6. Check the *bot* box in scopes.
7. Check the *administrator* box in general permissions.
8. Copy the URL in the bottom of the page.
9. Create a new discord server in the discord app and add your bot by pasting the copied link to your browser.

### Connect this project to your bot

10. Clone this repository.
12. Run `npm install` in the terminal from the root folder of this project.
13. Create a new file called `.env`
14. Insert `TOKEN=<yourBotTokenFromStep3>` in the `.env` file.
15. Create a new file called `data.json` and insert `{"test":0}`
16. Run `npm run dev` in the terminal

Your discord bot should now be running on your discord server. Test this by sending a message with your nerdle result.
