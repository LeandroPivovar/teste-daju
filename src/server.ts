import fastify from 'fastify';
import { RefoundController } from './controllers/RefoundController.ts';

const app = fastify();
const refoundController = new RefoundController();

app.get('/refound', (req, res) => refoundController.get(req, res));

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