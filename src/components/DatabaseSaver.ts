import {
  ArduinoController,
  EpeverController,
  GoodweController,
} from '../controllers';
import { Arduino, Epever, Goodwe } from '../models';
import { DeviceDatabaseSaver } from '../utils';

const arduinoSaver = (data: Arduino): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const arduinoController = new ArduinoController();

      await arduinoController.save(data);

      resolve(undefined);
    } catch (error) {
      reject(error);
    }
  });
};

const epeverSaver = (data: Epever): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const epeverController = new EpeverController();

      await epeverController.save(data);

      resolve(undefined);
    } catch (error) {
      reject(error);
    }
  });
};

const goodweSaver = (data: Goodwe): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const goodweController = new GoodweController();

      await goodweController.save(data);

      resolve(undefined);
    } catch (error) {
      reject(error);
    }
  });
};

const DatabaseReader: DeviceDatabaseSaver = {
  arduino: arduinoSaver,
  epever: epeverSaver,
  goodwe: goodweSaver,
};

export default DatabaseReader;
