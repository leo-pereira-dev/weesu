import 'reflect-metadata';
import { app, startServer } from './app';
import { dataSource } from '../typeorm';

dataSource
  .initialize()
  .then(async () => {
    await startServer(); // Configurar o aplicativo

    app.listen(3333, () => {
      // eslint-disable-next-line no-console
      console.log('Api On, na porta 3333!');
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error('Erro ao inicializar o data source:', error);
    process.exit(1); // Encerrar o processo com um código de erro
  });
