/**
 * All units used on Epever device, and mapped on docs.
 * Those units can be found on [Epever Docs](https://github.com/Gabao-Farias/epever-logger/blob/master/docs/A%20or%20BSeriesControllerProtocolv2.5.pdf).
 */
export type EpeverDataUnits =
  | 'VOLT'
  | 'AMPERE'
  | 'AMPERE_HOUR'
  | 'WATT'
  | 'CELSIUS'
  | 'PERCENTAGE'
  | 'KILOWATT_HOUR'
  | 'MV_C2_2V'
  | 'MINUTE'
  | 'SECOND'
  | 'HOUR';

/**
 * All possible numbers defined on Epever's Modbus data table docs. To make
 * this insane amount of cases, it has been used the function `addressesNumberTypeGenerator`.
 */
export type EpeverNumberKeyTable =
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'A6'
  | 'A7'
  | 'A8'
  | 'A9'
  | 'A10'
  | 'A11'
  | 'A12'
  | 'A13'
  | 'A14'
  | 'A15'
  | 'A16'
  | 'A17'
  | 'A18'
  | 'A19'
  | 'A20'
  | 'A21'
  | 'A22'
  | 'A23'
  | 'A24'
  | 'A25'
  | 'A26'
  | 'A27'
  | 'A28'
  | 'A29'
  | 'A30'
  | 'A31'
  | 'A32'
  | 'A33'
  | 'A34'
  | 'A35'
  | 'A36'
  | 'A37'
  | 'A38'
  | 'B1'
  | 'B2'
  | 'B3'
  | 'B4'
  | 'B5'
  | 'B6'
  | 'B7'
  | 'B8'
  | 'B9'
  | 'B10'
  | 'B11'
  | 'B12'
  | 'B13'
  | 'B14'
  | 'B15'
  | 'B16'
  | 'B17'
  | 'B18'
  | 'B19'
  | 'B20'
  | 'B21'
  | 'B22'
  | 'B23'
  | 'B24'
  | 'B25'
  | 'C1'
  | 'C2'
  | 'C3'
  | 'C4'
  | 'C5'
  | 'C6'
  | 'C7'
  | 'C8'
  | 'C9'
  | 'C10'
  | 'C11'
  | 'C12'
  | 'C13'
  | 'C14'
  | 'C15'
  | 'C16'
  | 'C17'
  | 'C18'
  | 'C19'
  | 'C20'
  | 'C21'
  | 'C22'
  | 'C23'
  | 'D1'
  | 'D2'
  | 'D3'
  | 'E1'
  | 'E2'
  | 'E3'
  | 'E4'
  | 'E5'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'G1'
  | 'G2'
  | 'G3'
  | 'G4'
  | 'G5'
  | 'G6'
  | 'G7'
  | 'G8';

export type EpeverKeyNumberData = {
  /**
   * Variable name.
   */
  variableName: string;
  /**
   * Database variable name.
   */
  databaseColumnName?: string;
  /**
   * Database variable name.
   */
  functionOperationTypes: EpeverFunctionCodesOperationTypes;
  /**
   * Address to read data from variable.
   */
  address: string;
  /**
   * Parameter that defines how is it going to be read or write.
   */
  functionCode: EpeverFunctionCodes | EpeverFunctionCodes[];
  /**
   * Field description.
   */
  description?: string;
  /**
   * Which is the measurement unit that will be used.
   */
  unit?: EpeverDataUnits;
  /**
   * Some values are coming raw, so we need to multiply or divide by a specific number
   * to achieve the correct value.
   */
  times?: number;
};

/**
 * This is a utility type to open to declare keys
 */
export type EpeverKeyMappedAddresses = {
  [name in EpeverNumberKeyTable]: EpeverKeyNumberData;
};

/**
 * All codes being used on Epever, more details can be found on
 * [Epever Docs](https://github.com/Gabao-Farias/epever-logger/blob/master/docs/A%20or%20BSeriesControllerProtocolv2.5.pdf)
 */
export type EpeverFunctionCodes = '02' | '03' | '04' | '05' | '10';

/**
 * These are the functions that are possible to use on this project following
 * the API from `modbus-serial` lib and the codes used on Epever device.
 */
export type EpeverFunctionNames =
  | 'readDiscreteInputs'
  | 'readHoldingRegisters'
  | 'readInputRegisters'
  | 'writeCoil'
  | 'writeRegisters';

/**
 * Relation between function codes and function names.
 */
export type EpeverKeyMappedFunctionCodeNames = {
  [name in EpeverFunctionCodes]: EpeverFunctionNames;
};

/**
 * Possible operation types used by address, they can be read, write and read/write.
 */
export type EpeverFunctionCodesOperationTypes = 'r' | 'w' | 'rw';

/**
 * Type of relation telling which keys are readable, to write on database
 */
export type EpeverNumberKeyTableOperationType = {
  [numberKey in EpeverNumberKeyTable]: EpeverFunctionCodesOperationTypes;
};
