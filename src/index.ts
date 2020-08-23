import { config } from './config';
import { app } from './app';

console.log('Using config', config);

const server = app.listen(config.port, () => {
  console.log('App is running at', server.address());
});
