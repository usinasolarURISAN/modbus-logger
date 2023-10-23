import { DatabaseSaver, DeviceReader } from '../components';
import { Arduino, Epever, Goodwe } from '../models';
import { FirestoreService, ModbusService } from '../service';
import createConnection from '../database';
import {
  classToObject,
  getCurrentDevice,
  getCurrentDeviceID,
  getCurrentEnvironment,
} from '../utils';

export class Server {
  modbus = new ModbusService();

  currentDevice = getCurrentDevice();

  dataRead?: Epever | Arduino;

  constructor() {
    createConnection();
  }

  readData = async (): Promise<Arduino | Epever | Goodwe> => {
    console.log(`\n\n===== STARTED READ DATA FROM MODBUS =====\n\n`);

    const data = await DeviceReader[this.currentDevice || 'arduino']({
      modbus: this.modbus,
    });

    console.log(`\n\n===== FINISHED READ DATA FROM MODBUS =====\n\n`);

    return data;
  };

  saveOnDataBase = async (props: Arduino | Epever | Goodwe) => {
    await DatabaseSaver[this.currentDevice || 'arduino'](props);

    console.log(`\n\n===== SAVED DATA ON DATABASE =====\n\n`);
  };

  saveOnFirestore = async (props: Arduino | Epever | Goodwe) => {
    console.log('Attempting to save to firestore...');
    try {
      const firestoreService = new FirestoreService();

      const epeverObjectConverted = classToObject(props);

      await firestoreService.addNewDoc(
        epeverObjectConverted,
        this.currentDevice
      );

      console.log('Uploaded to firestore!');
    } catch (error) {
      console.log('Failed to upload to firestore!');
    }
  };

  start = async () => {
    console.log(`\n\n===== SERVER STARTED =====\n\n`);
    console.log(`Environment: ${getCurrentEnvironment()}\n`);
    console.log(`Device: ${getCurrentDevice()}\n`);
    console.log(`Device ID: ${getCurrentDeviceID()}\n`);
    console.log(this.modbus.bus.isOpen);

    try {
      await this.modbus.connectDevice();
      const readData = await this.readData();
      console.log(readData);
      await this.saveOnDataBase(readData);
      this.modbus.closeConnection(() =>
        console.log(`\n\n===== CLOSED MODBUS CONNECTION =====\n\n`)
      );
      await this.saveOnFirestore(readData);
    } catch (error) {
      console.log({ error });
    } finally {
      this.modbus.closeConnection(() =>
        console.log(`\n\n===== CLOSED MODBUS CONNECTION =====\n\n`)
      );
    }
  };
}
