import { ConnectionOptions } from 'typeorm';
import { Devices } from '.';
import { Environments } from './environment';

/**
 * All configuration that can be set of database
 */
export type DatabaseConfig = ConnectionOptions;

/**
 * Database configuration based on environemnt.
 */
export type EnvironmentDeviceDatabaseConfig = {
  [env in Environments]: {
    [device in Devices]: DatabaseConfig;
  };
};

/**
 * All Tables
 */
export type UsedTables =
  | 'dev-arduino'
  | 'hml-arduino'
  | 'prd-arduino'
  | 'dev-epever'
  | 'hml-epever'
  | 'prd-epever'
  | 'dev-goodwe'
  | 'hml-goodwe'
  | 'prd-goodwe';

/**
 * Tables used on project.
 */
export type EnvironmentDeviceTables = {
  [env in Environments]: {
    [device in Devices]: UsedTables;
  };
};
