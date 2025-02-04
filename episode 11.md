Two types of server
- hardware
- software

The data transfer is done by TCP/IP protocol.  

Generally we create HTTP server using node

namastedev.com/ -> can be mapped default to port 3000
namastedev.com/api/getpath -> can be mapped to port 3010

sockets vs websockets
- socket is opened for a lot time
- websockets closes after it finishes its usecase

We use 'express' to create http server which handles incomming requests instead of native node:http module. 
