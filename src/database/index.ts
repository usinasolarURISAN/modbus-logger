import { Connection, createConnection } from 'typeorm';
import { DATABASE_CONFIG } from '../utils';

export default async (): Promise<Connection> => {
  const defaultOptions = DATABASE_CONFIG;

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'
          ? 'postgres-test'
          : defaultOptions.database,
    })
  );
};
