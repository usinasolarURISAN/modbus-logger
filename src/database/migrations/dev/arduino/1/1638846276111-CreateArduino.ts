import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { getCurrentTable } from '../../../../../utils';

const table = getCurrentTable();

export class CreateArduino1638846276111 implements MigrationInterface {
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
            name: 'externalBatteryState',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'wireOvercharge',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'currentVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'energyGenerated',
            type: 'numeric',
            isNullable: true,
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
