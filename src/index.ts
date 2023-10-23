import { CronJob } from 'cron';
import { Server } from './server';

const server = new Server();

console.log('Starting server...\n\n');

server.start();

var job = new CronJob('*/5 * * * *', () => {
  console.log('Starting cron');
  server.start();
});

job.start();
