const Bull = require('bull');

const options = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
};

const queue = new Bull('test', '', options);

(async () => {
  console.log('resuming the queue')
  await queue.resume();

  process.exit();
})()