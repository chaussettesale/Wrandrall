const Discord = require('discord.js')

 const bot = new Discord.Client()

 bot.on("ready", function () {
   bot.user.setActivity("Caravan War");
   console.log("Je suis connecté !");
 });




      bot.on('message', message => {
                            if (message.content === '!chanteW') {
                            message.channel.send('Démons...et merveilles !\nEnfer...més dans nos coeurs \nDevil adversité \nEnfer...vents défenseurs \nDémons...tagnes jeunes \nSatan...père à nos yeux \nL\'incube...ation du temps \nMal traitant nos aïeux ! \nC\'est l\'antéchrist Staline \nPrières que j\'ai lu- \n-cifer tiles et si riches \nQu\'on damne nos abus !')
                            }
                          })

bot.on('message', message => {
                            if (message.content === '!nomo') {
                            message.channel.send('Bon... Saurais-tu soigner nos maux ?')
                             }
                             })

bot.on('message', message => {
                            if (message.content === 'Qui est-ce ?') {
                            message.channel.send('Comment ça qui est-ce ?')
                             }
                             })

bot.on('message', message => {
                            if (message.content === 'Je me doute bien. Ce doit être un pseudo... Tendancieux qui plus est, hein ?') {
                            message.channel.send('Mais non. Nos maux, c\'est nos bobos quoi !')
                             }
                             })

bot.on('message', message => {
                            if (message.content === 'Ah ! Il a un autre surnom ?') {
                            message.channel.send('Mais non bordel !')
                             }
                             })

bot.on('message', message => {
                            if (message.content === 'Bordel ? C\'est dur à porter ça. J\'avais un ami qu\'on appelait couil...') {
                            message.channel.send('Un mal, des maux! Comme un ail, des aulx...')
                             }
                             })

      bot.on('message', message => {
                            if (message.content === '!helpw') {
                            message.channel.send(' Pour me controler il faut taper l\'une des commandes suivantes:\n\n**__Catégorie Stratégie:__**\n\n**__Catégorie Fun:__**\n\n**__Catégorie RDA:__**\n\n ```!chanteW ``` ')
                             }
                             })

 bot.login('NDIxNTk0MzUwMDYyMDEwMzY4.DYPgJg.pKMABKL14JR99T-V-wV5L4ijAPA')
