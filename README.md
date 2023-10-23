<div align=center>
  <h1>Modbus RTU Serial Logger</h1>
  <h4>🚧 Building... 🏗️</h4>
</div>

## USB Cable Model

xr21b1411

## USB Connections

Recently it has been discovered that the sequence of the USB connections may cause issues on the modbus read process. It's still unknown the reason why this happens, but there is a known sequence that we didn't caught any errors that might be useful for further tests.

### Currently Working Plug Sequence
* Plug the goodwe USB
* Plug the epever devices then

### Currently Failing Plug Sequence
* Plug an epever USB
* Plug the goodwe device...

> If you try to read on epever device, you'll notice that it suddenly stopped working... Try to remove all USB cables and connect only the Epever cable.

## EFI

https://askubuntu.com/questions/762254/why-do-i-get-required-key-not-available-when-install-3rd-party-kernel-modules/762255#762255

sudo apt install mokutil

sudo mokutil --disable-validation

## Driver

https://github.com/lipnitsk/xr

https://www.maxlinear.com/support/design-tools/software-drivers (i think here is more correct!)

lsmod

https://unix.stackexchange.com/questions/91027/how-to-disable-usb-autosuspend-on-kernel-3-7-10-or-above

usbcore auto suspend

https://github.com/kasbert/epsolar-tracer/tree/master/xr_usb_serial_common-1a

epever driver

# Scan for tty devices

`dmesg`
Or, plug the device and find by the folder if it appears after plugin in `ls /dev/tty*`

# Add User to Dialout group

`sudo usermod -a -G dialout $USER`

(You may need to logout and back in for the new group to take effect.)

## Setting up Postgres

### Install

https://www.postgresql.org/download/linux/ubuntu/

### Access as root

`sudo -i -u postgres`

#### Access postgres

`psql`

#### Changing user password

[Here](https://stackoverflow.com/questions/12720967/how-to-change-postgresql-user-password)

### Creating database

`CREATE DATABASE solar;`

### Listing Databases

`\list`

### Creating user (Writer)

`CREATE USER lispector WITH ENCRYPTED PASSWORD 'a3r3784y0r34y78t78';`

### Creating user (Reader)

`CREATE USER solar_reader WITH ENCRYPTED PASSWORD '87g2387geg7qr38a7h276rg9763rg';`

### Listing users

`\du`

### Grant connection on database to user

`GRANT CONNECT ON DATABASE solar TO lispector;`

### Grant write only access to user

`GRANT INSERT ON ALL TABLES IN SCHEMA public TO lispector;`

### Grant read only access to user

`GRANT SELECT ON ALL TABLES IN SCHEMA public TO solar_reader;`

## Setting MySQL

You'll need to change the migrations types because, it's set by default to follow the Postgres
Data Types and there are some types wich doesn't exist on MySQL like uuid, so these types must
be changed.

### Native Password

Also you may encounter this error `ER_NOT_SUPPORTED_AUTH_MODE:` when first running migrations, to
get over the problem, you'll need to use native mysql password, so use the below command changing
the `root` and the `password` for your reality.

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`

## Possible Duplicated Values :warning:

### Epever

| NumberKey | Repeats on |        Variable Name         |
| :-------: | :--------: | :--------------------------: |
|    A14    |     B3     |   batteryRealRatedVoltage    |
|    B2     |    F10     |       ratedLoadCurrent       |
|    B8     |    B18     |     chargingLimitVoltage     |
|    B20    |    C23     | defaultLoadOnOffInManualMode |

### Goodwe

| NumberKey |  Repeats on   |   Variable Name    |
| :-------: | :-----------: | :----------------: |
|    A20    |      A21      |     bmsStatus      |
|    A19    | A29, A58, A59 |        tbd         |
|    A79    |      A80      | eBatteryDischargeL |

## Issues on reading addresses :warning:

### Epever

| NumberKey | Issue Code |    Variable Name     |
| :-------: | :--------: | :------------------: |
|    F9     |     02     | Illegal Data Address |
|    F11    |     02     | Illegal Data Address |
|    F12    |     02     | Illegal Data Address |

## Goodwe Unused Addresses

|  Addresses  |        Description        |
| :---------: | :-----------------------: |
| 0200 - 0207 | Serial Number Of Inverter |
| 0210 - 0214 |  Model Name of Inverter   |

## Useful Links

- https://github.com/kasbert/epsolar-tracer

### Postgres
- https://tableplus.com/blog/2018/04/postgresql-how-to-grant-access-to-users.html
- https://www.postgresqltutorial.com/postgresql-administration/postgresql-show-tables/#:~:text=Use%20the%20%5Cdt%20or%20%5Cdt%2B,table%20information%20from%20the%20pg_catalog.
