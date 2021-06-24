const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '>';
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const fs = require('fs');

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
        if(msg.channel.name == 'ludvík') return;
        if(msg.channel.name == 'ludvik') return;
        msg.channel.send('ahoj :)');
    }
    if(msg.content === "ahoj"){
        if(msg.channel.name == 'ludvík') return;
        if(msg.channel.name == 'ludvik') return;
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
        if(msg.author.id == '618459055916187679'){
        msg.reply('no more pings for you hahaha')
        }else {msg.channel.send('Verze **0.9.95**, Název verze: **Small Update** | Vytvořil <@399139182725038080>\nZměny:\n*- Přidaný příkaz >bruhify.*')};
    
    }
    if(msg.content === '>help'){
        msg.channel.send('**Příkazy pro FoxBota:**\n'+
        '**>time** - Zobrazí současný čas (hh:mm).\n'+
        '**>help** - Zobrazí nápovědu pro příkazy (tohle).\n'+
        '**>info** - Zobrazí informace o botovi, changelog.\n'+
        '**>echo (zpráva)** - Zopakuje zprávu.\n'+
        '**>calc (příklad)** - Vypočítá příklad.\n'+
        '**>ban (user) (reason)** - Zabanuje uživatele (potřeba oprávnění: BAN_MEMBERS)\n'+
        '**>kick (user) (reason)** - Vyhodí uživatele ze serveru (potřeba oprávnění: KICK_MEMBERS)\n'+
        '**>covid** - Zobrazí aktuální statistiky covidu v ČR.\n'+
        '**>bruhify** - AuTiStIcKý tExT');
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
    if(msg.content === '>covid'){
        var StaticURL = 'https://api.apify.com/v2/key-value-stores/K373S4uCFR9W1K8ei/records/LATEST?disableRedirect=true'
        $.getJSON(StaticURL ,function(data){
            msg.channel.send('**Aktivní případy:** '+data.active+'\n**Potvrzené případy:** '+data.infected+'\n**Celkem provedených testů:** '+data.totalTested+'\n**Zotavených:** '+data.recovered+'\n**Smrti:** '+data.deceased+'\n*Naposledy aktualizováno:* '+data.lastUpdatedAtApify)
        })
    }
    if(msg.content.startsWith('>eval')){
        if(msg.author.id == '399139182725038080'){
        const evmsg = msg.content.slice(6)
        console.log('Trying to evaluate command: '+evmsg)
        eval(evmsg);
        console.log('Evaluated successfully')
        msg.reply('vyhodnoceno 👍')
        }else(msg.channel.send('Nemáš permise!'));
    }
    if(msg.content.startsWith('>bruhify')){
        var str = msg.content.slice(8)
        function toUpperCase(str) {
        return str.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('');
}

        msg.channel.send(toUpperCase(str))

    }
})
//--------------------------------------------------------------------------------------------------------------------------------//

bot.login(process.env.TOKEN);
