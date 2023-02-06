const Bull = require('bull');

const options = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
};

const queue = new Bull('test', '', options);

(async () => {
const failed = await queue.getFailed()

console.log('retrying while the queue is paused')
for (job in failed) {
  await failed[job].retry()
}

process.exit();
})()