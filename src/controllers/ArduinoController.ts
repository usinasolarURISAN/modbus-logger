import { getCustomRepository } from 'typeorm';
import { Arduino } from '../models';
import { ArduinoRepository } from '../repositories';

class ArduinoController {
  async save(requestData: Partial<Arduino>) {
    const {} = requestData;

    const arduinoRepository = getCustomRepository(ArduinoRepository);

    const arduino = arduinoRepository.create(requestData);

    await arduinoRepository.save(arduino);
  }

  async showAll() {
    const arduinoRepository = getCustomRepository(ArduinoRepository);

    const all = await arduinoRepository.find();

    return all;
  }
}

export { ArduinoController };
