import { execSync } from 'child_process';

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Por favor, forneça o nome da migração.');
  process.exit(1);
}

try {
  execSync(
    `ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create src/shared/typeorm/migrations/${migrationName}`,
    {
      stdio: 'inherit',
    },
  );
  console.log('Migração criada com sucesso.');
} catch (error) {
  console.error('Erro ao criar a migração:', (error as Error).message);
  process.exit(1);
}
