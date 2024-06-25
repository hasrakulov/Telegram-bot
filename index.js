const TelegramBot = require("node-telegram-bot-api");

const token = "7331505395:AAGkXNTxsLfh88XequZ_Q1slMs2OnYTGj9E";

const bot = new TelegramBot(token, { polling: true});

bot.onText(/\/start/, (msg) => {
    const opt = {
        reply_yo_message_id : msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ["Ahvoling qanday!"],
                ["Ishlaring joyidami?"],
                ["Isming nima?"],
                ["Bugungi sanani ayt?"]
            ],
            "one_time_keyboard": true
        })
    };
    if (msg.chat.type === "private") {
        bot.sendMessage(msg.chat.id, "Salom men savollarga javob beruvchi botman!", opt)
    }
});
bot.onText(/Ahvoling qanday?/, (msg) => {
    bot.sendMessage(msg.chat.id, "Ahvolim juda yaxshi👌")
})

bot.onText(/Ishlaring joyidami?/, (msg) => {
    bot.sendMessage(msg.chat.id, "Ishlarim joyda")
})

bot.onText(/Isming nima?/, (msg) => {
    bot.sendMessage(msg.chat.id, "Mia")
})

bot.onText(/Bugungi sanani ayt?/, (msg) => {
    const date = new Date();
    if (date.getMonth() === 5) {
        bot.sendMessage(msg.chat.id, "Bugungi sana " + date.getDate().toString() + 
    "-iyun");
    } else if (date.getMonth() === 6) {
        bot.sendMessage(msg.chat.id, "Bugundi sana" + date.getDate().toString() + 
        "-iyul");
    }
})