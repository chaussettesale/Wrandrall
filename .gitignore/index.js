const Discord = require('discord.js')

 const botw = new Discord.Client()

 botw.on("ready", function () {
   botw.user.setActivity("Caravan War");
   console.log("Je suis connecté !");
 });

 botw.on('message', message => {
   if (message.content === 'ping') {
   message.channel.send('pong !')
   }
 })

 
    
      
      botw.on('message', message => {
                            if (message.content === '!chante') {
                            message.channel.send('Démons...et merveilles !\nEnfer...més dans nos coeurs \nDevil adversité \nEnfer...vents défenseurs \nDémons...tagnes jeunes \nSatan...père à nos yeux \nL\'incube...ation du temps \nMal traitant nos aïeux ! \nC'est l\'antéchrist Staline \nPrières que j'ai lu- \n-cifer tiles et si riches \nQu\'on damne nos abus !')
                            }
                          })
      botw.on('message', message => {
                            if (message.content === '!helpw') {
                            message.channel.send(' Pour me controler il faut taper l\'une des commandes suivantes:\n\n **__Catégorie Stratégie:__**\n\n**__Catégorie Fun:__**\n\n**__Catégorie RDA:__**\n\n ```!chante ``` ')
                             }
                             })
     
 botw.login('NDIxNTk0MzUwMDYyMDEwMzY4.DYPgJg.pKMABKL14JR99T-V-wV5L4ijAPA')
