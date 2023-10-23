import { getCurrentDevice, getCurrentEnvironment } from '../helpers';
import { DatabaseConfig } from '../types/database';

const currentEnv = getCurrentEnvironment();
const currentDevice = getCurrentDevice();

const migrations = `./src/database/migrations/${currentEnv}/${currentDevice}/**.ts`;
const migrationsDir = `./src/database/migrations/${currentEnv}/${currentDevice}`;

export const DATABASE_CONFIG: DatabaseConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'lispector',
  password: 'a3r3784y0r34y78t78',
  database: 'solar',
  migrations: [`${migrations}`],
  entities: ['./src/models/**.ts'],
  logging: true,
  cli: {
    migrationsDir: migrationsDir,
  },
};
