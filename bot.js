const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  
  
 
  
  
  
  
  
  });
  
   
 
 
 
 
 
 
 
 
const adminprefix = "J"; 
const devs = ['453799418680836098'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'sg')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغير البلاينق الى :white_check_mark:**`)
} else
  if (message.content.startsWith(adminprefix + 'sn')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغير اسمك الى :white_check_mark: `)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'sa')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورتك الى :white_check_mark: `);
      } else    
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark: تم تغير الحاله الى ستريمنق ${argresult}**`)
}
 
});
 
 
 
 
 
client.login("NDUzNzk5NDE4NjgwODM2MDk4.Dqe-ig.qj1T6ScmkSET5acaiGFeISZZAls");
