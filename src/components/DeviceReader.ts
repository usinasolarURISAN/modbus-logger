import { Arduino, Epever, Goodwe } from '../models';
import {
  DEFAULT_RETRY_READ_AMOUNT,
  DeviceModbusReader,
  DeviceModbusReaderProps,
  EpeverFunctionNames,
  EpeverNumberKeyTable,
  EPEVER_KEY_MAPPED_DATA,
  GOODWE_KEY_MAPPED_DATA,
  handleReadOnlyFunctionName,
  hexToDec,
  ModbusError,
} from '../utils';

const arduinoReadData = async ({
  modbus,
}: DeviceModbusReaderProps): Promise<Arduino> => {
  const wantsToRead = 100;
  var results = [];
  for (let index = 0; index < wantsToRead; index++) {
    try {
      const address = index === 10 ? 200 : index;
      const functionName: EpeverFunctionNames = 'readHoldingRegisters';

      const result = await modbus.readData({ address, functionName });
      results.push(result);
      console.log({ index, result });
    } catch (err) {
      console.log(err);
      const readDataError = new ModbusError(err);
      console.log(readDataError);
    }
  }

  const arduinoClassData = new Arduino();

  return arduinoClassData;
};

const epeverReadData = async ({
  modbus,
  delayInEachRead,
}: DeviceModbusReaderProps): Promise<Epever> => {
  const epeverClassData = new Epever();
  const epeverData = EPEVER_KEY_MAPPED_DATA;
  const epeverKeys = Object.keys(epeverData) as EpeverNumberKeyTable[];

  for (let timesRead = 0; timesRead < DEFAULT_RETRY_READ_AMOUNT; timesRead++) {
    for (const key of epeverKeys) {
      try {
        const currentDeviceDataIndex = epeverData[key];

        const address = hexToDec(currentDeviceDataIndex.address);
        const functionName = handleReadOnlyFunctionName({
          code: currentDeviceDataIndex.functionCode,
        });

        console.log({ id: key, address, functionName });

        if (functionName) {
          const result = await modbus.readData({
            address,
            functionName,
            delayOnRead: delayInEachRead,
          });

          const { databaseColumnName, times } = currentDeviceDataIndex;

          const processedResult = times
            ? result.data[0] / times
            : result.data[0];

          if (processedResult !== undefined && processedResult !== null)
            epeverClassData[databaseColumnName] = processedResult;

          console.log({ id: key, address, result });
        }
      } catch (err) {
        console.log(err);
        const readDataError = new ModbusError(err);
        console.log(readDataError);
      }
    }

    console.log(
      `[EPEVER READER] - finished read try ${timesRead} of ${DEFAULT_RETRY_READ_AMOUNT}`
    );
  }

  return epeverClassData;
};

const goodweReadData = async ({
  modbus,
  delayInEachRead,
}: DeviceModbusReaderProps): Promise<Goodwe> => {
  const goodweClassData = new Goodwe();
  const goodweData = GOODWE_KEY_MAPPED_DATA;
  const goodweKeys = Object.keys(goodweData);

  for (let timesRead = 0; timesRead < DEFAULT_RETRY_READ_AMOUNT; timesRead++) {
    for (const key of goodweKeys) {
      try {
        const currentDeviceDataIndex = goodweData[key];

        const address = hexToDec(currentDeviceDataIndex.address);
        const functionName = handleReadOnlyFunctionName({
          code: currentDeviceDataIndex.functionCode,
        });

        console.log({ id: key, address, functionName });

        if (functionName) {
          const result = await modbus.readData({
            address,
            functionName,
            delayOnRead: delayInEachRead,
          });

          const { databaseColumnName, times } = currentDeviceDataIndex;

          const processedResult = times
            ? result.data[0] / times
            : result.data[0];

          if (processedResult !== undefined && processedResult !== null)
            goodweClassData[databaseColumnName] = processedResult;

          console.log({ id: key, address, result });
        }
      } catch (err) {
        console.log(err);
        const readDataError = new ModbusError(err);
        console.log(readDataError);
      }
    }

    console.log(
      `[GOODWE READER] - finished read try ${timesRead} of ${DEFAULT_RETRY_READ_AMOUNT}`
    );
  }

  return goodweClassData;
};

const DeviceReader: DeviceModbusReader = {
  arduino: arduinoReadData,
  epever: epeverReadData,
  goodwe: goodweReadData,
};

export default DeviceReader;
