// import process from 'process';

import { uselessBot } from './bot/uselessBot';

uselessBot.start((ctx) => ctx.reply('Estoy vivo :D'));

uselessBot.launch();
