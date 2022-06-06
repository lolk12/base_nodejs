import TelegramBot from 'node-telegram-bot-api';

import { start as startBot } from 'controller/chat/start';
import { start as startDB } from 'model/db/start';
import { errorLogger } from 'helpers/logger';

const getUserName = (msg: TelegramBot.Message) => msg?.chat?.username || '';

const main = async () => {
  try {
    const client = await startDB();
    startBot(client);
  } catch (e) {
    errorLogger(e);
  }
};

main();
