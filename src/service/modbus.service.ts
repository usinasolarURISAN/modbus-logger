import { ReadRegisterResult } from 'modbus-serial/ModbusRTU';
import {
  Devices,
  DEVICE_CONFIG,
  getEnvironmentVariable,
  ModbusRTU,
  ReadDataServiceProps,
} from '../utils';

/**
 * Modbus service to use on Modbus contexts, most of the time will be reading
 * data from devices.
 */
class ModbusService {
  bus?: ModbusRTU;

  constructor() {
    this.bus = new ModbusRTU();
  }

  /**
   * Connect current device via serial.
   */
  connectDevice = async () => {
    const currentDevice = getEnvironmentVariable<Devices>('DEVICE');
    const { baudRate, devicePathPort } = DEVICE_CONFIG[currentDevice];

    await this.bus.connectRTUBuffered(devicePathPort, {
      baudRate: Number(baudRate),
    });
    this.bus.setID(1);
    this.bus.setTimeout(100);
  };

  /**
   * Close the modbus connection
   */
  closeConnection = async (callBack?: () => void) => {
    this.bus.close(callBack ? callBack : () => {});
  };

  /**
   * Read data from device.
   * @param address
   * @param functionCode
   * @returns data read from device.
   */
  readData = async ({
    address,
    functionName,
    length = 1,
    delayOnRead,
  }: ReadDataServiceProps): Promise<ReadRegisterResult> => {
    if (delayOnRead) {
      return new Promise<ReadRegisterResult>(async (resolve, reject) => {
        setTimeout(async () => {
          try {
            const initTimer = Number(new Date());

            const results = await this.bus[functionName](
              address,
              length as never
            );

            console.log(
              `Elapsed time to read: ${Number(new Date()) - initTimer}`
            );

            resolve(results as ReadRegisterResult);
          } catch (error) {
            reject(error);
          }
        }, delayOnRead);
      });
    }

    return new Promise<ReadRegisterResult>(async (resolve, reject) => {
      try {
        const initTimer = Number(new Date());
        const results = await this.bus[functionName](address, length as never);

        console.log(`Elapsed time to read: ${Number(new Date()) - initTimer}`);

        resolve(results as ReadRegisterResult);
      } catch (error) {
        reject(error);
      }
    });
  };
}

export default ModbusService;
