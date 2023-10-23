import { EntityRepository, Repository } from 'typeorm';
import { Arduino } from '../models';

@EntityRepository(Arduino)
class ArduinoRepository extends Repository<Arduino> {}

export { ArduinoRepository };
