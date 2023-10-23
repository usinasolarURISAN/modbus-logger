import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { getCurrentTable } from '../../../../utils';

const table = getCurrentTable();

export class CreateGoodwe1641765792435 implements MigrationInterface {
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
            name: 'deviceId',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'lowestFeedingVoltageOfPV',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'reconnectTime',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'highLimitOfGridVoltage',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'lowLimitOfGridVoltage',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'highLimitOfGridFrequency',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'lowLimitOfGridFreqency',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'rtcDateTimeYearMonth',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'rtcDateTimeDateHour',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'rtcDateTimeMinuteSecond',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'rangeOfRealPowerAdjust',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'rangeOfReactivePowerAdjust',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'serialNumberOfInverter',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'modelNameOfInverter',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'errorCode',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'eTotal',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'hTotal',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'pvVoltageOfFirstTracker',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'pvVoltageOfSecondTracker',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'pvCurrentOfFirstTracker',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'pvCurrentOfSecondTracker',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridVoltageOfPhase1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridVoltageOfPhase2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridVoltageOfPhase3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridCurrentOfPhase1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridCurrentOfPhase2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridCurrentOfPhase3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridFrequencyOfPhase1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridFrequencyOfPhase2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'gridFrequencyOfPhase3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'feedingPowerToGrid',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'runningStatus',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'temperatureOfHeatsink',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'eYieldDay',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'vpv1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'vpv2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'ipv1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'ipv2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'vac1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'vac2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'vac3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'iac1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'iac2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'iac3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'fac1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'fac2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'fac3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'pacL',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'workMode',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'temperature',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'errorMessageH',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'errorMessageL',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'eTotalH',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'eTotalL',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'hTotalH',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'hTotalL',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'firmwareVersion',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'warningCode',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'pv2FaultValue',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'functionsValue',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'line2VfaultValue',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'line3VfaultValue',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'busVoltage',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'nbusVoltage',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'line3FfaultValue',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'safetyCountry',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'eFeedDay',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'yearMonth',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'dateHour',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'minuteSecond',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'manufactureID',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'rssi',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'pvMode',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'fmVersionOfARM',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'gprsBurnInMode',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'pacH',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'vpv3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'vpv4',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'ipv3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'ipv4',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr1',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr2',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr3',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr4',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr5',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr6',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr7',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr8',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr9',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr10',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr11',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr12',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr13',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr14',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr15',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr16',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'iStringStatus',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'istr18',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr19',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'istr20',
            isNullable: true,
            type: 'numeric',
          },
          {
            name: 'pidWietapStatus',
            isNullable: true,
            type: 'varchar',
          },
          {
            name: 'timestamp',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_minute',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_hour',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_date',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_month',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timestamp_year',
            type: 'numeric',
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table, true);
  }
}
