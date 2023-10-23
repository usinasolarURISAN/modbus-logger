import { ModbusService } from './service';
import { getCurrentDevice, getCurrentDeviceID, hexToDec } from './utils';

const device = getCurrentDevice();
const deviceID = getCurrentDeviceID();
const modbus = new ModbusService();

const read = async () => {
  console.log({ device, deviceID });
  try {
    const result = await modbus.readData({
      address: hexToDec('200C'),
      functionName: 'readDiscreteInputs',
      delayOnRead: 100,
    });

    console.log({ result });
  } catch (error) {
    console.log({ error });
  } finally {
    await modbus.closeConnection();
    console.log('Closed connection');
  }
};

modbus.connectDevice();

read();
