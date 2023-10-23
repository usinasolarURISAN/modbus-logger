import { getCustomRepository } from 'typeorm';
import { GoodweRepository } from '../repositories';
import { Epever } from '../models';

class GoodweController {
  async save(requestData: Partial<Epever>) {
    const {} = requestData;

    const goodweRepository = getCustomRepository(GoodweRepository);

    const goodwe = goodweRepository.create(requestData);

    await goodweRepository.save(goodwe);
  }
}

export { GoodweController };
