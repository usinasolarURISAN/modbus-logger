# Configs Arduino
PORT_ARDUINO=/dev/ttyACM0

# Configs EPEVER
PORT_EPEVER=/dev/ttyXRUSB0
REFERENCE=2000

# Configs EPEVER with improvised cable
PORT_EPEVER_IMRPOVISED=/dev/ttyUSB0
REFERENCE_IMPROVISED=12545

# To read modbus from arduino uncomment below
# ~/repos/modpoll/x86_64-linux-gnu/modpoll -b 9600 -p none -d 8 -m rtu -a 1 -r 1 -c 4 $PORT_ARDUINO

# To read modbus from epever uncomment below
# ~/repos/modpoll/x86_64-linux-gnu/modpoll -b 9600 -p none -t 0 -d 8 -m rtu -a 1 -r $REFERENCE -c 400 $PORT_EPEVER

# To read modbus from epever uncomment below
~/repos/modpoll/x86_64-linux-gnu/modpoll -b 115200 -p none -t 0 -d 8 -m rtu -a 1 -r $REFERENCE_IMPROVISED -c 1 $PORT_EPEVER_IMRPOVISED
