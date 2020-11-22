const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '>';
const dateWithouthSecond = new Date();
const cas = new Date().toLocaleString('cz', { timeZone: 'Europe/Prague', hour: '2-digit', minute:'2-digit' });
const usedCommandRecently = new Set();

bot.on('ready', () =>{
    console.log('Online');
    bot.user.setActivity('>help', {type: 'WATCHING'});
})

//admincmds id 726428996379869194

//oznamování stramů (broken)------------------------------------------------------------------------------------------------------//
bot.on('ready', () =>{
    console.log(cas)
    setInterval(() =>{
        delete hours
        delete minutes
        delete finalTime
        delete dt
        const dt = new Date();
        const hours = dt.getHours(); // gives the value in 24 hours format
        const hours2 = hours + 1;
        const minutes = dt.getMinutes() ; 
        const cas = hours2 + ":" + minutes;
       if(cas == '18:50'){
       bot.channels.cache.get("726447986372247602").send("@everyone stream začíná za 10 minut | <http://twitch.tv/xd_p0tat0>")
           .then((msg)=> {
            setInterval(function(){
                const d8 = new Date();
                const hrs = d8.getSeconds();
                const hrsdwn = 60 - hrs
                const min1 = d8.getMinutes();
                const min = min1 + 1
                const mindwn = 60 - min
                const gay = (mindwn<10?'0':'') + mindwn
                const gay2 = (hrsdwn<10?'0':'') + hrsdwn
                msg.edit('@everyone stream začíná za ' + gay+ ':' +gay2 + ' | <http://twitch.tv/xd_p0tat0>');
                const dt = new Date();
                const hours = dt.getHours();
                const hours2 = hours + 1;
                const minutes = dt.getMinutes() ; 
                const cas = hours2 + ":" + minutes;
                if(cas == '19:0'){
                msg.delete
                bot.channels.cache.get("726447986372247602").send("Je 19:00 a xd_Potato by měl začít vysílat | <http://twitch.tv/xd_p0tat0>");
                break;
               }
            }, 5000)
          }); 
       }
       else(console.log(cas));
   }, 60000)
})
//--------------------------------------------------------------------------------------------------------------------------------//

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
        msg.channel.send('Verze **0.9.9**, Název verze: **AdminFinal** | Vytvořil <@399139182725038080>\nZměny:\n*- Přidaný příkaz >mute pro administrátory a helpery serveru.*');
    }
    if(msg.content === ">help"){
        msg.channel.send('**Příkazy pro FoxBota:**\n**>time** - Zobrazí současný čas (hh:mm).\n**>help** - Zobrazí nápovědu pro příkazy (tohle).\n**>info** - Zobrazí informace o botovi, changelog.\n**>echo (zpráva)** - Zopakuje zprávu\n**>calc (příklad)** - Vypočítá příklad\n**>ban (user) (reason)** - Zabanuje uživatele (potřeba oprávnění: BAN_MEMBERS)\n**>kick (user) (reason)** - Vyhodí uživatele ze serveru (potřeba oprávnění: KICK_MEMBERS)\n**>mute (user) (time)** - Ztlumí uživatele (potřeba oprávnění: MUTE_MEMBERS)');
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
    if(msg.content.startsWith('>mute')){
      if(msg.member.hasPermission("MUTE_MEMBERS")){
    let args = msg.content.substring(PREFIX.length).split(" ");
    var person  = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]));
            if(!person) return  msg.reply("Nelze najít uživatele" + person)
            let role = msg.guild.roles.cache.find(role => role.name === "MUTED");
           
 
            if(!role) return msg.channel.send("Nelze najít roli. Pro fungování tohoto příkazu musí existovat role MUTED s vypnutými oprávněními pro psaní!");
 
 
            let time = args[2];
            if(!time){
                return msg.channel.send("Neznámý čas");
            }

            person.roles.add(role.id)
 
            msg.channel.send(`<@${person.id}> je ztlumený po dobu ${ms(ms(time))}`)
 
            setTimeout(function(){
                
                person.roles.remove(role.id);
                msg.channel.send(`<@${person.id}> je odtlumen!`)
            }, ms(time));
        }  else{msg.channel.send('Nemáš oprávnění na mute!')}
    }
})
//--------------------------------------------------------------------------------------------------------------------------------//

bot.login(process.env.TOKEN);
