const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '>';

bot.on('ready', () =>{
    console.log('Online');
    bot.user.setActivity('>help', {type: 'WATCHING'});
})

//příkazy-------------------------------------------------------------------------------------------------------------------------//
bot.on('message', msg=>{
    if (msg.author.bot){
        console.log('Ignorovaná zpráva:',msg.content,'| Důvod: zprávu odeslal bot.');
        return;
    }
    if(msg.content === "čau"){
        msg.channel.send('ahoj :)');
    }
    if(msg.content === "ahoj"){
        msg.channel.send('čau :)');
    }
    if(msg.content === "hotel"){
        msg.channel.send('trivago');
        msg.react('🏨');
    }
    if(msg.content === ">time"){
const dt = new Date();
const minuty = dt.getMinutes();
const hodiny2 = dt.getHours();
const hodiny = hodiny2 + 1;
console.log( (minuty<10?'0':'') + minuty );
console.log( (hodiny<10?'0':'') + hodiny );
const tajm = (hodiny<10?'0':'') + hodiny+':'+(minuty<10?'0':'') + minuty
msg.channel.send(tajm);
    }
    if(msg.content === ">info"){
        msg.channel.send('Verze **0.9.8**, Název verze: **AdminFinal** | Vytvořil <@399139182725038080>\nZměny:\n*- Přidaný příkaz >ban pro administrátory a helpery serveru.*');
    }
    if(msg.content === ">help"){
        msg.channel.send('**Příkazy pro FoxBota:**\n**>time** - Zobrazí současný čas (hh:mm).\n**>help** - Zobrazí nápovědu pro příkazy (tohle).\n**>info** - Zobrazí informace o botovi, changelog.\n**>echo (zpráva)** - Zopakuje zprávu\n**>calc (příklad)** - Vypočítá příklad\n**>ban (user) (reason)** - Zabanuje uživatele (potřeba oprávnění: BAN_MEMBERS)\n**>kick (user) (reason)** - Vyhodí uživatele ze serveru (potřeba oprávnění: KICK_MEMBERS)');
    }
    if(msg.channel.id === "726484288647725077"){
        msg.react('✅');
        msg.react('❌');
    }
    if(msg.channel.id === "769123649063878656"){
        msg.react('✅');
        msg.react('❌');
    }
    if(msg.content.startsWith('>echo')){
        const reply = msg.content.slice(5);
        msg.channel.send(reply);
    }
    if(msg.content.startsWith(">calc")){
        const splitter = msg.content.slice(6);
        const msgsplit = splitter.split(" ")
        finalsplit = 'Chyba. *TIP: Používej mezery. např.: 2+2 nebude fungovat, místo toho použij 2 + 2*'
        if(msgsplit[1] == '+'){
            number1=parseFloat(msgsplit[0]);
            number2=parseFloat(msgsplit[2]);
            finalsplit = number1+number2
        }
        if(msgsplit[1] == '-'){
           finalsplit = msgsplit[0] - msgsplit[2]
        }
        if(msgsplit[1] == '*'){
            finalsplit = msgsplit[0] * msgsplit[2]
        }
        if(msgsplit[1] == '/'){
            finalsplit = msgsplit[0] / msgsplit[2]
        }
        console.log(msg.author.tag+' executed '+msgsplit[0] +' '+msgsplit[1]+' '+ msgsplit[2] +' = '+ finalsplit)
        msg.channel.send(finalsplit);
    }
    if(msg.content.startsWith('>kick')){
        if (msg.member.hasPermission("KICK_MEMBERS")){
            const user = msg.mentions.users.first();
            if(user){
                const member = msg.guild.member(user);
                if(member){
                    member.kick('kicked').then(()=>{
                        reason = msg.content.split('>')
                        console.log(reason)
                        msg.channel.send('Uživatel **'+user.tag+'** vyhozen. Důvod:'+reason[2]);
                    });
                }
            }
        }else(msg.channel.send('Nemáš permise na kick!'))
    }
    if(msg.content.startsWith('>ban')){
    if (msg.member.hasPermission("BAN_MEMBERS")){
        const user = msg.mentions.users.first();
        if(user){
            const member = msg.guild.member(user);
            if(member){
                member.ban({ days: 7, reason: 'banned' }).then(()=>{
                    reason = msg.content.split('>')
                    console.log(reason)
                    msg.channel.send('Uživatel **'+user.tag+'** zabanován. Důvod:'+reason[2]);
                });
            }
        }
    }else(msg.channel.send('Nemáš permise na ban!'))
}
    if(msg.content.startsWith('>dm') && msg.author.id == 399139182725038080){
        (msg.channel.send('Posílám zprávu'));
        mention = msg.mentions.users.first();
        dmmsg = msg.content.slice (4);
        mention.send(dmmsg);
        (msg.channel.send('Zpráva odeslána úspěšně.'));
    }

})
//--------------------------------------------------------------------------------------------------------------------------------//

bot.login(process.env.TOKEN);
