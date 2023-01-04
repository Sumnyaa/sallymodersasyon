module.exports = {
    
    name: 'burç',
  çalıştır: async (client, message, args,prefix ) => {
    
    const { MessageActionRow, MessageButton } = require('discord.js');
    const babansramtan = require('../config/sramtan.json')

    let sramtansss1 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♉')
        .setCustomId('boga')

    let sramtansss2 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♊')
        .setCustomId('ikizler')

    let sramtansss3 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♋')
        .setCustomId('yengec')

    let sramtansss4 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♌')
        .setCustomId('aslan')

    let sramtansss5 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♍')
        .setCustomId(`basak`)

    let sramtansss6 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♎')
        .setCustomId('terazi')


    let sramtansss7 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♈')
        .setCustomId('koc')


    let sramtansss8 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♏')
        .setCustomId('akrep')
    
    let sramtansss9 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♐')
        .setCustomId('yay')
    
    let sramtansss10 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♑')
        .setCustomId('oglak')
    
    let sramtansss11 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♒')
        .setCustomId('kova')
    
    let sramtansss12 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('♓')
        .setCustomId('balık')

        
    

    let golgesramtanshadow = new MessageActionRow()
        .addComponents(sramtansss1, sramtansss2, sramtansss3, sramtansss4)
    
    let golgesramtanshadow2 = new MessageActionRow()
        .addComponents(sramtansss5, sramtansss6, sramtansss7, sramtansss8)

     let golgesramtanshadow3 = new MessageActionRow()
        .addComponents(sramtansss9, sramtansss10, sramtansss11, sramtansss12)
    
    message.channel.send({ content:`** Merhabalar arkadaşlar, burç rollerinizi seçmek için aşağıdaki butonlardan herhangi birine basabilirsiniz.  **

    ** ♉ : <@&${babansramtan.burç.boga}> **
    ** ♊ : <@&${babansramtan.burç.ikizler}> ** 
   **  ♋ : <@&${babansramtan.burç.yengec}> **
   **  ♌ : <@&${babansramtan.burç.aslan}> **
  **   ♍ : <@&${babansramtan.burç.basak}> **
  **   ♎ : <@&${babansramtan.burç.terazi}> ** 
   **  ♈ : <@&${babansramtan.burç.koc}> **
   **  ♏ : <@&${babansramtan.burç.akrep}> **
   **  ♐ : <@&${babansramtan.burç.yay}> **
   **  ♑ : <@&${babansramtan.burç.oglak}> **
   **  ♒ : <@&${babansramtan.burç.kova}> **
   **  ♓ : <@&${babansramtan.burç.balık}> **
    
    
    
     
    
    
    
    `, components: [golgesramtanshadow, golgesramtanshadow2, golgesramtanshadow3]  }) ;




      }

}
