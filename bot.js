const telegraf = require('telegraf')

const key = '671670157:AAGsg6zep2t_ec5hNn7WSL-ZKr9860_lTZA'

const bot = new telegraf(key)

bot.on('message',ctx=>{
    ctx.reply(JSON.stringify(ctx.update , null , 4))
})

bot.on('location',ctx=>{
    ctx.reply(JSON.stringify(ctx.update , null , 4))
})

bot.on('contact',ctx=>{
    ctx.reply(JSON.stringify(ctx.update , null , 4))
})

bot.on('image',ctx=>{
    ctx.reply(JSON.stringify(ctx.update , null , 4))
})

bot.on('file',ctx=>{
    ctx.reply(JSON.stringify(ctx.update , null , 4))
})

const PORT = process.env.PORT || 3000;
const URL = 'https://kaiserechobot.herokuapp.com';

bot.webhookReply = false;
bot.telegram.setWebhook(`${URL}/bot`).catch((err) => console.log(err));

// Start https webhook
bot.startWebhook('/bot', null, PORT)
bot.webhookReply = false;