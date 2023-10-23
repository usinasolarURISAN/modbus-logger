import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { getCurrentTable } from '../../../../utils';

const table = getCurrentTable();

export class CreateEpever1641765793338 implements MigrationInterface {
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
            name: 'overTemperatureInsideTheDevice',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'isNight',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'PVArrayInputVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'PVArrayInputCurrent',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'PVArrayInputPowerL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'PVArrayInputPowerH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'loadVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'loadCurrent',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'loadPowerL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'loadPowerH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryTemperature',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'deviceTemperature',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batterySOC',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryRealRatedVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryStatus',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'chargingEquipmentStatus',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'dischargingEquipmentStatus',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'maximumBatteryVoltageToday',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'minimumBatteryVoltageToday',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'consumedEnergyTodayL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'consumedEnergyTodayH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'consumedEnergyThisMonthL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'consumedEnergyThisMonthH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'consumedEnergyThisYearL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'consumedEnergyThisYearH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'totalConsumedEnergyL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'totalConsumedEnergyH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'generatedEnergyTodayL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'generatedEnergyTodayH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'generatedEnergyThisMonthL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'generatedEnergyThisMonthH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'generatedEnergyThisYearL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'generatedEnergyThisYearH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'totalGeneratedEnergyL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'totalGeneratedEnergyH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryCurrentL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryCurrentH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'ratedChargingCurrent',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'ratedLoadCurrent',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryType',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'batteryCapacity',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'temperatureCompensationCoefficient',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'chargingLimitVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'overVoltageReconnectVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'equalizeChargingVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'boostChargingVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'floatChargingVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'boostReconnectChargingVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'lowVoltageReconnectVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'underVoltageWarningRecoverVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'underVoltageWarningVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'lowVoltageDisconnectVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'dischargingLimitVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryRatedVoltageLevel',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'defaultLoadOnOffInManualMode',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'equalizeDuration',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'boostDuration',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryDischarge',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryCharge',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'chargingMode',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'nightTimeThresholdVoltageNTTV',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'lightSignalStartupNightDelayTime',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'dayTimeThresholdVoltageDTTV',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'lightSignalCloseDayDelayTime',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'loadControlMode',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'LightOnTimeTime1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'LightOnTimeTime2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOnTime1Second',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOnTime1Minute',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOffTime1Second',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOffTime1Minute',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOffTime1Hour',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOnTime2Second',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOnTime2Minute',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOnTime2Hour',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOffTime2Second',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOffTime2Minute',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'timingControlTurnOffTime2Hour',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'nightTime',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'timingControlTimeChoose',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'realTimeClockSecondsMinutes',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'realTimeClockHourDay',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'realTimeClockMonthYear',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'batteryUpperTemperatureLimit',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryLowerTemperatureLimit',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'deviceOverTemperature',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'deviceRecoveryTemperature',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'backlightTime',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'arrayRatedVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'arrayRatedCurrent',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'arrayRatedPowerL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'arrayRatedPowerH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryRatedVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryRatedCurrent',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryRatedPowerL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'batteryRatedPowerH',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'ratedLoadVoltage',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'ratedLoadPowerToL',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'ratedLoadPowerToH',
            type: 'numeric',
            isNullable: true,
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
