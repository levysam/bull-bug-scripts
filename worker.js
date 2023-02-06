const Bull = require('bull');

const options = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
};

const queue = new Bull('test', '', options);

(async () => {
await queue.process(
  'process',
  async (job) => {
    console.log(JSON.stringify(job))
    throw 'error'
  },
);
})()