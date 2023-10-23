#!/usr/bin/env python3
import minimalmodbus

# port name, slave address (in decimal)
instrument = minimalmodbus.Instrument('/dev/ttyXRUSB0', 1)
instrument.serial.baudrate = 115200         # Baud

## Read temperature (PV = ProcessValue) ##
# Registernumber, number of decimals

batteryTemperature = instrument.read_register(12560, 1)
print(batteryTemperature)

## Change temperature setpoint (SP) ##
# NEW_TEMPERATURE = 95
# Registernumber, value, number of decimals for storage
# instrument.write_register(24, NEW_TEMPERATURE, 1)
