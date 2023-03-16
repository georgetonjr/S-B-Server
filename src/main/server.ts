import 'reflect-metadata';
import { app } from './app';
import { config } from './config';

(async (): Promise<void> => {
  const serverApp = await app();

  serverApp.get('/health', (req, res) => {
    res.status(200).send({ status: 'OK' });
  });

  serverApp.listen(config.SERVER_PORT, () => {
    console.log(`Server is running on  http://localhost:${config.SERVER_PORT}`);
  });
})();
