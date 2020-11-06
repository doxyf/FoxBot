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

//oznamování stramů---------------------------------------------------------------------------------------------------------------//
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
                bot.channels.cache.get("618397936979673100").send("19:00 true");
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
        msg.channel.send('Verze **0.9.5**, Název verze: **Bramborový update** | Vytvořil <@399139182725038080>\nZměny:\n*- Přidaný msg.edit pro oznamování streamů\n- Mega Bugfix*');
    }
    if(msg.content === ">help"){
        msg.channel.send('**Příkazy pro FoxBota:**\n**>time** - Zobrazí současný čas (hh:mm).\n**>help** - Zobrazí nápovědu pro příkazy (tohle).\n**>info** - Zobrazí informace o botovi, changelog.');
    }
    if(msg.channel.id === "726484288647725077"){
        msg.react('✅');
        msg.react('❌');
    }
    if(msg.channel.id === "769123649063878656"){
        msg.react('✅');
        msg.react('❌');
    }
    
})
//--------------------------------------------------------------------------------------------------------------------------------//

//Direct msg system---------------------------------------------------------------------------------------------------------------//
bot.on('message', msg=>{
    if(msg.content.startsWith('>dm') && msg.author.id == 399139182725038080){
        (msg.channel.send('Posílám zprávu'));
        mention = msg.mentions.users.first();
        dmmsg = msg.content.slice (4);
        mention.send(dmmsg);
        (msg.channel.send('Zpráva odeslána úspěšně.'));
    }
})
//--------------------------------------------------------------------------------------------------------------------------------//

//nápady--------------------------------------------------------------------------------------------------------------------------//
bot.on('message', msg=>{
    if(msg.channel.id === '769130381181321236'){
        if(msg.content.startsWith('>napad')){
            if(usedCommandRecently.has(msg.author.id)){
            msg.reply('dej si pauzu. Tenhle příkaz se dá použít jen jednou za hodinu.')
            }
            else{
            mention = msg.mentions.users.first();
            napados = msg.content.slice (7);
            bot.channels.cache.get("769218051928490055").send(napados + ' | Poslal:' + ' <@'+msg.author+'>');
            usedCommandRecently.add(msg.author.id);
            setTimeout(() =>  {
                usedCommandRecently.delete(msg.author.id);
            }, 3600000)
            }
        }
    }
    if(msg.channel.id === "769218051928490055"){
        msg.react('✅');
        msg.react('❌');
    }
    
})
//--------------------------------------------------------------------------------------------------------------------------------//

bot.login(process.env.TOKEN);
