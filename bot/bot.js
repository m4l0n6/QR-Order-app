const { Telegraf } = require("telegraf");
require("dotenv").config();

// Khởi tạo bot với token từ biến môi trường
const bot = new Telegraf(process.env.BOT_TOKEN);

// Lệnh /start
bot.start((ctx) => {
    ctx.reply("Chào mừng bạn đến với bot QR-Order! 🚀");
});

// Khởi chạy bot
bot.launch();
console.log("🤖 Bot Telegram đã hoạt động trên Railway!");
