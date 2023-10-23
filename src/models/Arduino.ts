import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { getCurrentTable } from '../utils';

const table = getCurrentTable();

@Entity(table)
class Arduino {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  externalBatteryState: boolean;

  @Column()
  wireOvercharge: boolean;

  @Column()
  currentVoltage: number;

  @Column()
  energyGenerated: number;

  @Column()
  readonly timestamp: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.timestamp = Number(new Date());
    }
  }
}

export { Arduino };
