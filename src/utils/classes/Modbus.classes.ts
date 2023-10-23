export class ModbusError {
  stack: string;

  modbusCode: string;

  constructor(error: any) {
    this.stack = error.stack;
    this.modbusCode = error.modbusCode;
  }
}
