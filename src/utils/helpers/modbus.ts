import {
  ModbusFunctionCodes,
  ModbusFunctionNames,
  ModbusFunctionTypes,
} from '..';
import {
  MODBUS_FUNCTION_CODES_TO_FUNCTION_NAMES,
  MODBUS_FUNCTION_CODES_TO_FUNCTION_TYPES,
} from '../consts/modbus.consts';

type HandleFunctionNameProps = {
  code: ModbusFunctionCodes | ModbusFunctionCodes[];
};

/**
 * Checks if a given code is from a given type.
 * @param functionCode
 * @param functionType
 * @returns bool
 */
export const isCodeTypeFunction = (
  functionCode: ModbusFunctionCodes,
  functionType: ModbusFunctionTypes
): boolean =>
  MODBUS_FUNCTION_CODES_TO_FUNCTION_TYPES[functionCode] === functionType;

/**
 * Returns the last readonly function name. If no read function on the given
 * array is found, returns undefined.
 * @param param0
 * @returns ModbusFunctionName
 */
export const handleReadOnlyFunctionName = ({
  code,
}: HandleFunctionNameProps): ModbusFunctionNames | undefined => {
  if (typeof code === 'string' && isCodeTypeFunction(code, 'r')) {
    return MODBUS_FUNCTION_CODES_TO_FUNCTION_NAMES[code];
  }

  if (typeof code === 'object') {
    var functionName: ModbusFunctionNames | undefined = undefined;
    code.forEach((codeValue) => {
      if (isCodeTypeFunction(codeValue, 'r')) {
        functionName = MODBUS_FUNCTION_CODES_TO_FUNCTION_NAMES[codeValue];
      }
    });

    return functionName;
  }

  return undefined;
};
