import {
  ModbusErrorMessages,
  ModbusFunctionCodesToFunctionNames,
  ModbusFunctionCodesToFunctionTypes,
} from '..';

/**
 * Those erros can be found on `node_modules/modbus-serial/index.js` as a
 * variable called `modbusErrorMessages`.
 */
export const MODBUS_SERIAL_ERROR_CODES: ModbusErrorMessages[] = [
  'Unknown error',
  'Illegal function (device does not support this read/write function)',
  'Illegal data address (register not supported by device)',
  'Illegal data value (value cannot be written to this register)',
  'Slave device failure (device reports internal error)',
  'Acknowledge (requested data will be available later)',
  'Slave device busy (retry request again later)',
];

/**
 * Code relation with function name of modbus lib.
 */
export const MODBUS_FUNCTION_CODES_TO_FUNCTION_NAMES: ModbusFunctionCodesToFunctionNames =
  {
    '02': 'readDiscreteInputs',
    '03': 'readHoldingRegisters',
    '04': 'readInputRegisters',
    '05': 'writeCoil',
    '10': 'writeRegisters',
  };

/**
 * Code relation with function type of modbus lib.
 */
export const MODBUS_FUNCTION_CODES_TO_FUNCTION_TYPES: ModbusFunctionCodesToFunctionTypes =
  {
    '02': 'r',
    '03': 'r',
    '04': 'r',
    '05': 'w',
    '10': 'w',
  };
