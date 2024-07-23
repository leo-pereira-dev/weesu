import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export default async function loadRoutes(app: Express): Promise<void> {
  const routesDir = join(__dirname, '../../../../modules');

  // Função assíncrona para carregar e registrar as rotas
  const registerRoutes = async (moduleDir: string): Promise<void> => {
    const modulePath = join(routesDir, moduleDir, 'infra/http/routes');

    // Verifique se o diretório de rotas existe
    if (readdirSync(modulePath).length === 0) return;

    const routeFiles = readdirSync(modulePath).filter(file =>
      file.endsWith('.routes.ts'),
    );

    // Iterar sobre os arquivos de rotas e registrá-los
    for (const file of routeFiles) {
      const routePath = join(modulePath, file);
      const baseRoute = file.split('.routes.ts')[0];
      const routeName = `/${baseRoute}`;

      console.log(`Registrando rota: ${routePath}`);
      console.log(`Nome da Rota: ${routeName}`);

      try {
        // Importar e registrar a rota
        const routeModule = await import(routePath);
        const route = routeModule.default as Router;

        app.use(routeName, route);
      } catch (err) {
        console.error(`Erro ao carregar a rota ${routePath}:`, err);
      }
    }
  };

  // Obter todos os diretórios de módulos
  const moduleDirs = readdirSync(routesDir);

  // Registrar rotas para cada módulo
  for (const moduleDir of moduleDirs) {
    await registerRoutes(moduleDir);
  }
}
