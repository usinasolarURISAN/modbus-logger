import { EntityRepository, Repository } from 'typeorm';
import { Goodwe } from '../models';

@EntityRepository(Goodwe)
class GoodweRepository extends Repository<Goodwe> {}

export { GoodweRepository };
