import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { getCurrentDeviceID, getCurrentTable } from '../utils';

const table = getCurrentTable();

@Entity(table)
class Goodwe {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  readonly deviceId: string;

  @Column()
  lowestFeedingVoltageOfPV: number;

  @Column()
  reconnectTime: number;

  @Column()
  highLimitOfGridVoltage: number;

  @Column()
  lowLimitOfGridVoltage: number;

  @Column()
  highLimitOfGridFrequency: number;

  @Column()
  lowLimitOfGridFreqency: number;

  @Column()
  rtcDateTimeYearMonth: string;

  @Column()
  rtcDateTimeDateHour: string;

  @Column()
  rtcDateTimeMinuteSecond: string;

  @Column()
  rangeOfRealPowerAdjust: number;

  @Column()
  rangeOfReactivePowerAdjust: string;

  @Column()
  serialNumberOfInverter: string;

  @Column()
  modelNameOfInverter: string;

  @Column()
  errorCode: string;

  @Column()
  eTotal: number;

  @Column()
  hTotal: number;

  @Column()
  pvVoltageOfFirstTracker: number;

  @Column()
  pvVoltageOfSecondTracker: number;

  @Column()
  pvCurrentOfFirstTracker: number;

  @Column()
  pvCurrentOfSecondTracker: number;

  @Column()
  gridVoltageOfPhase1: number;

  @Column()
  gridVoltageOfPhase2: number;

  @Column()
  gridVoltageOfPhase3: number;

  @Column()
  gridCurrentOfPhase1: number;

  @Column()
  gridCurrentOfPhase2: number;

  @Column()
  gridCurrentOfPhase3: number;

  @Column()
  gridFrequencyOfPhase1: number;

  @Column()
  gridFrequencyOfPhase2: number;

  @Column()
  gridFrequencyOfPhase3: number;

  @Column()
  feedingPowerToGrid: number;

  @Column()
  runningStatus: string;

  @Column()
  temperatureOfHeatsink: number;

  @Column()
  eYieldDay: number;

  @Column()
  vpv1: number;

  @Column()
  vpv2: number;

  @Column()
  ipv1: number;

  @Column()
  ipv2: number;

  @Column()
  vac1: number;

  @Column()
  vac2: number;

  @Column()
  vac3: number;

  @Column()
  iac1: number;

  @Column()
  iac2: number;

  @Column()
  iac3: number;

  @Column()
  fac1: number;

  @Column()
  fac2: number;

  @Column()
  fac3: number;

  @Column()
  pacL: number;

  @Column()
  workMode: string;

  @Column()
  temperature: number;

  @Column()
  errorMessageH: string;

  @Column()
  errorMessageL: string;

  @Column()
  eTotalH: number;

  @Column()
  eTotalL: number;

  @Column()
  hTotalH: number;

  @Column()
  hTotalL: number;

  @Column()
  firmwareVersion: string;

  @Column()
  warningCode: string;

  @Column()
  pv2FaultValue: number;

  @Column()
  functionsValue: string;

  @Column()
  line2VfaultValue: number;

  @Column()
  line3VfaultValue: number;

  @Column()
  busVoltage: number;

  @Column()
  nbusVoltage: number;

  @Column()
  line3FfaultValue: number;

  @Column()
  safetyCountry: number;

  @Column()
  eFeedDay: number;

  @Column()
  yearMonth: string;

  @Column()
  dateHour: string;

  @Column()
  minuteSecond: string;

  @Column()
  manufactureID: string;

  @Column()
  rssi: number;

  @Column()
  pvMode: string;

  @Column()
  fmVersionOfARM: string;

  @Column()
  gprsBurnInMode: string;

  @Column()
  pacH: number;

  @Column()
  vpv3: number;

  @Column()
  vpv4: number;

  @Column()
  ipv3: number;

  @Column()
  ipv4: number;

  @Column()
  istr1: number;

  @Column()
  istr2: number;

  @Column()
  istr3: number;

  @Column()
  istr4: number;

  @Column()
  istr5: number;

  @Column()
  istr6: number;

  @Column()
  istr7: number;

  @Column()
  istr8: number;

  @Column()
  istr9: number;

  @Column()
  istr10: number;

  @Column()
  istr11: number;

  @Column()
  istr12: number;

  @Column()
  istr13: number;

  @Column()
  istr14: number;

  @Column()
  istr15: number;

  @Column()
  istr16: number;

  @Column()
  iStringStatus: string;

  @Column()
  istr18: number;

  @Column()
  istr19: number;

  @Column()
  istr20: number;

  @Column()
  pidWietapStatus: string;

  @Column()
  readonly timestamp: number;

  @Column()
  readonly timestamp_minute: number;

  @Column()
  readonly timestamp_hour: number;

  @Column()
  readonly timestamp_date: number;

  @Column()
  readonly timestamp_month: number;

  @Column()
  readonly timestamp_year: number;

  constructor() {
    const timestamp = Number(new Date());
    const timestampObject = new Date(timestamp);

    if (!this.id) {
      this.id = uuid();
      this.deviceId = getCurrentDeviceID();
      this.timestamp = timestamp;
      this.timestamp_minute = timestampObject.getMinutes();
      this.timestamp_hour = timestampObject.getHours();
      this.timestamp_date = timestampObject.getDate();
      this.timestamp_month = timestampObject.getMonth() + 1;
      this.timestamp_year = timestampObject.getFullYear();
    }
  }
}

export { Goodwe };
