const Bull = require('bull');
const Ulid = require('ulid');

const qtde = 50;

const queueData = [
  {},
];

const options = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
};

(async () => {
  const queue = new Bull('test', '', options);
  for (let i = 0; i < qtde; i++) {
    console.log('adding to queue')
    const teste = await queue.add(
        'process',
        queueData[0],
        {
          removeOnComplete: 100,
          attempts: 0,
          backoff: 1000,
          jobId: Ulid.ulid(),
        },
    );
  }

  process.exit()
})();
