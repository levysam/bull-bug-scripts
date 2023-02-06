const Bull = require('bull');

const options = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
};

const queue = new Bull('test', '', options);

(async () => {
  console.log('pausing the queue')
  await queue.pause()

process.exit();
})()
