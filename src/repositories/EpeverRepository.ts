import { EntityRepository, Repository } from 'typeorm';
import { Epever } from '../models';

@EntityRepository(Epever)
class EpeverRepository extends Repository<Epever> {}

export { EpeverRepository };
