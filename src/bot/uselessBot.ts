import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from '../.env/botToken';

export const uselessBot = new Telegraf(BOT_TOKEN);

let state = { enojado: false };
uselessBot.command('start', (ctx) => {
    ctx.reply(':)');
});

uselessBot.command('help', (ctx) => {
    ctx.reply('botardo by fasuto');
});

uselessBot.hears('text', (ctx) => {
    // Ejecuta el callback si lee 'text'
    // No comprueba que un mensaje incluya la palabra
    // Debe estar en un mensaje individual
});

uselessBot.on('text', (ctx) => {
    // Se ejecuta ante cualquier mensaje de texto
    const { text } = ctx.message;
    const { id, first_name, last_name } = ctx.from;
    // Se puede utilizar información del contexto
    let palabra = 'palabra';
    text.includes(palabra) &&
        ctx.reply(`Hola, ${first_name}, dijiste ${palabra}`);

    // Se pueden controlar estados
    state.enojado && ctx.reply('No me intersa hablarte');
});
