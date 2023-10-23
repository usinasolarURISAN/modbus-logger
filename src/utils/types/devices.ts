import { Arduino, Epever, Goodwe } from '../../models';
import { ModbusService } from '../../service';
import { ModbusFunctionCodes, ModbusFunctionTypes } from './modbus';

/**
 * Devices used on project.
 */
export type Devices = 'epever' | 'goodwe' | 'arduino';

/**
 * Default baud rates used on devices.
 */
export type BaudRate = '9600' | '115200';

/**
 * Device path ports used by devices.
 */
export type DevicePathPorts =
  | '/dev/ttyACM0'
  | '/dev/ttyUSB0'
  | '/dev/ttyXRUSB0';

/**
 * Configurations that can be variable according to environment.
 */
export type DeviceConfig = {
  /**
   * It's the path where the device is located, example: `/dev/ttyACM0`.
   *
   * Those paths can be found by running `ls /dev/tty*`, and there you can
   * see the available ports.
   */
  devicePathPort: string;
  /**
   * Baud rate, or unit to measure data transmission in *binary/second*.
   *
   * 1 baud means 1 bit per second transmission speed.
   */
  baudRate: BaudRate;
};

/**
 * Defined to create relation between the device that is being used `Devices` and their
 * configuration
 */
export type DeviceEnvConfig = {
  [device in Devices]: DeviceConfig;
};

/**
 * Type to determine how read is done by different devices.
 */
export type DeviceModbusReader = {
  [device in Devices]: (
    props: DeviceModbusReaderProps
  ) => Promise<Arduino | Epever | Goodwe>;
};

/**
 * Type to determine how save on database is done by different devices.
 */
export type DeviceDatabaseSaver = {
  [device in Devices]: (props: Arduino | Epever | Goodwe) => Promise<void>;
};

export type DeviceModbusReaderProps = {
  modbus: ModbusService;
  /**
   * I discovered recently that there are some devices that requires more
   * time than others to read from modbus - *this was causing issues when
   * iterating over data to read them all*.
   *
   * The test for it was setting a timestamp at the beggining of the read
   * function from modbus lib, and setting a new timestamp at the final of
   * the process.
   *
   * Then we can compare between different devices which is the average
   * time to read data over modbus.
   *
   * ### Examples
   * * Arduino ->  average of **~24 miliseconds** to read data.
   * * Epever ->  average of **~53 miliseconds** to read data.
   */
  delayInEachRead?: number;
};

export type GenericDeviceTableInfo = {
  /**
   * Variable name.
   */
  variableName?: string;
  /**
   * Database variable name.
   */
  databaseColumnName: string;
  /**
   * Function operation types, if there are read, write or both options. If on
   * a specific address there are both options, use an array pointing each of
   * the possible options.
   */
  functionOperationTypes: ModbusFunctionTypes | ModbusFunctionTypes[];
  /**
   * Address to read data from variable.
   */
  address: string;
  /**
   * Parameter that defines how is it going to be read or write.
   */
  functionCode: ModbusFunctionCodes | ModbusFunctionCodes[];
  /**
   * Field description.
   */
  description?: string;
  /**
   * Which is the measurement unit that will be used.
   */
  unit?: GenericDataUnits;
  /**
   * Some values are coming raw, so we need to multiply or divide by a specific number
   * to achieve the correct value.
   */
  times?: number;
};

/**
 * All units used on Epever device, and mapped on docs.
 * Those units can be found on [Epever Docs](https://github.com/Gabao-Farias/epever-logger/blob/master/docs/A%20or%20BSeriesControllerProtocolv2.5.pdf).
 */
export type GenericDataUnits =
  | 'VOLT'
  | 'AMPERE'
  | 'AMPERE_HOUR'
  | 'WATT'
  | 'CELSIUS'
  | 'PERCENTAGE'
  | 'PERCENTAGE_VOLT'
  | 'PERCENTAGE_MINUTE'
  | 'KILOWATT'
  | 'KILOWATT_HOUR'
  | 'KILOOHM'
  | 'MV_C2_2V'
  | 'MINUTE'
  | 'SECOND'
  | 'HOUR'
  | 'HERTZ';
