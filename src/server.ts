import fastify from 'fastify';

const app = fastify();

app.get('/', async () => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await app.listen({ port: 3010 });
    console.log('Server running at http://localhost:3010');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();