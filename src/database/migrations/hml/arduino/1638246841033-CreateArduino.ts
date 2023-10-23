import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { getCurrentEnvironmentAndDevice } from '../../../../utils';

const table = getCurrentEnvironmentAndDevice();

export class CreateEpever1638246841033 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: table,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'overTemperatureInsideTheDevice',
            type: 'boolean',
          },
          {
            name: 'wireOvercharge',
            type: 'boolean',
          },
          {
            name: 'currentVoltage',
            type: 'numeric',
          },
          {
            name: 'energyGenerated',
            type: 'numeric',
          },
          {
            name: 'timestamp',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table, true);
  }
}
