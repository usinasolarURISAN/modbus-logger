const currentEnv = process.env.ENV;
const currentDevice = process.env.DEVICE;

const migrations = `./src/database/migrations/${currentEnv}/${currentDevice}/**.ts`;
const migrationsDir = `./src/database/migrations/${currentEnv}/${currentDevice}`;

module.exports = {
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
