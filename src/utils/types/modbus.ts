export type ReadDataServiceProps = {
  address: number;
  functionName: ModbusFunctionNames;
  length?: number;
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
  delayOnRead?: number;
};

/**
 * All codes being used on modbus. Yet not all function names have benn added here,
 * they will be added as more devices are added to the project
 */
export type ModbusFunctionNames =
  | 'readDiscreteInputs'
  | 'readHoldingRegisters'
  | 'readInputRegisters'
  | 'writeCoil'
  | 'writeRegisters';

/**
 * Function types of modbus lib.
 *
 * R stands for **read**
 *
 * W stands for **write**
 */
export type ModbusFunctionTypes = 'r' | 'w';

/**
 * All codes being used on modbus.
 * Yet, not all codes have been added, those will be added as more devices are
 * added to project, following their requirements.
 */
export type ModbusFunctionCodes = '02' | '03' | '04' | '05' | '10';

/**
 * Relation between function codes and function names.
 */
export type ModbusFunctionCodesToFunctionNames = {
  [code in ModbusFunctionCodes]: ModbusFunctionNames;
};

/**
 * Relation between function codes and function types.
 */
export type ModbusFunctionCodesToFunctionTypes = {
  [code in ModbusFunctionCodes]: ModbusFunctionTypes;
};

export type ModbusErrorMessages =
  | 'Unknown error'
  | 'Illegal function (device does not support this read/write function)'
  | 'Illegal data address (register not supported by device)'
  | 'Illegal data value (value cannot be written to this register)'
  | 'Slave device failure (device reports internal error)'
  | 'Acknowledge (requested data will be available later)'
  | 'Slave device busy (retry request again later)';
