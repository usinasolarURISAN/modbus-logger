import { Devices, Environments, EnvironmentVariables } from '../types';

/**
 * You can pass a generic type to define the return type which can be `Environments` or `Devices`
 * @param variable its one of `EnvironmentVariables` type
 * @returns generic type
 */
export const getEnvironmentVariable = <T>(variable: EnvironmentVariables): T =>
  process.env[variable] as unknown as T;

/**
 * Get current environment. Basically calls `getEnvironmentVariable` under de hood.
 * @returns current environment
 */
export const getCurrentEnvironment = () =>
  getEnvironmentVariable<Environments>('ENV');

/**
 * Get current device. Basically calls `getEnvironmentVariable` under de hood.
 * @returns current device
 */
export const getCurrentDevice = () => getEnvironmentVariable<Devices>('DEVICE');

/**
 * Get current device. Basically calls `getEnvironmentVariable` under de hood.
 * @returns current device ID
 */
export const getCurrentDeviceID = () =>
  getEnvironmentVariable<string>('DEVICE_ID');

/**
 * Useful to determine which table will be used when using cli
 * @returns UsedTables
 */
export const getCurrentTable = (): string => {
  const env = getCurrentEnvironment();
  const device = getCurrentDevice();

  return `${env}-${device}`;
};
