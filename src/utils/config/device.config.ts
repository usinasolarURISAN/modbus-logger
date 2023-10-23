import { EPEVER_BASE_PATH_PORT } from '../consts';
import { getCurrentDeviceID } from '../helpers';
import { DeviceEnvConfig } from '../types/devices';

const currentDeviceID = getCurrentDeviceID();
const epeverDevicePathPort = `${EPEVER_BASE_PATH_PORT}${currentDeviceID}`;

export const DEVICE_CONFIG: DeviceEnvConfig = {
  arduino: {
    baudRate: '9600',
    devicePathPort: '/dev/ttyACM0',
  },
  epever: {
    baudRate: '115200',
    devicePathPort: epeverDevicePathPort,
  },
  goodwe: {
    baudRate: '9600',
    devicePathPort: '/dev/ttyUSB0',
  },
};
