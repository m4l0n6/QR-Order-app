const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

// Khởi tạo bot với token từ biến môi trường
const bot = new Telegraf(process.env.BOT_TOKEN);

// Lệnh /start
bot.start((ctx) => {
    ctx.replyWithPhoto(
        "https://plus.unsplash.com/premium_photo-1681293215212-2a7f852e44ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        {
            caption: `Chào mừng bạn đến với bot đặt món ăn! 🍔🍟🍕
            
                    Để xem menu, hãy ấn vào nút bên dưới.
            `,
            parse_mode: "Markdown",
            reply_markup: Markup.inlineKeyboard([
                [Markup.button.callback("Xem menu", "menu")],
                [Markup.button.url("Truy cập website", "https://qr-order-app.vercel.app/")],
            ]),
        }
    )
});

bot.help((ctx) => {
    ctx.reply("Hướng dẫn đặt món ăn: \n1. Chọn món ăn từ menu . \n2. Ấn giỏ hàng để xem chi tiết các món đã đặt. \n3. Nhập thông tin của bạn để đặt món.");
})

bot.action("menu", (ctx) => {
    ctx.reply("Đây là menu của chúng tôi: ")
    setTimeout(() => {
        ctx.replyWithPhoto("https://incucdep.com/wp-content/uploads/2019/03/mau-thiet-ke-menu-bang-phan1.jpg");
    }, 3000);
})

// Khởi chạy bot
bot.launch();
console.log("🤖 Bot Telegram đã hoạt động trên Railway!");
