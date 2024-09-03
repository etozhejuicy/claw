import TelegramBot from 'node-telegram-bot-api';

const token = '7263167373:AAGu68Qq1BT9MuZ0Ol5CeWygqZWCJYeAb00';
const bot = new TelegramBot(token, { polling: true });

const commands = {
    '/start': {
        description: 'Start the bot',
        handler: (chatId) => {
            bot.sendMessage(chatId, 'Пришлите мне код ошибки, а я попытаюсь исправить его');
        },
    },
    '/help': {
        description: 'Show help message',
        handler: (chatId) => {
            bot.sendMessage(chatId, 'Для корректной работы, после отправки команды "/start" - после ответа впишите исходный код, где была найдена ошибка');
        },
    },
};

bot.on('message', (msg) => {
    try {
        const { chat: { id: chatId }, text: messageText } = msg;

        if (commands[messageText]) {
            commands[messageText].handler(chatId);
        } else {
            console.log(msg);
            bot.sendMessage(chatId, 'Спасибо! Результаты получите в следующем обновлении :-)');
        }
    } catch (error) {
        console.error(error);
    }
});