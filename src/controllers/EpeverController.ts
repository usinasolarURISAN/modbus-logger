import { getCustomRepository } from 'typeorm';
import { Epever } from '../models';
import { EpeverRepository } from '../repositories';

class EpeverController {
  async save(requestData: Partial<Epever>) {
    const {} = requestData;

    const epeverRepository = getCustomRepository(EpeverRepository);

    const epever = epeverRepository.create(requestData);

    await epeverRepository.save(epever);
  }
}

export { EpeverController };
