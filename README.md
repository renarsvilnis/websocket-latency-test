

Small node.js + socket.io test for testing out latency beetween emiting data from a master to all slaves. In this case just by changing the background color beetween black and grey.

## Installation

```bash
# download and install dependencies
git clone <url-to-repo>
cd websocket-latenct-test
npm install

# start server on default port - 3345
npm run start
# or specify port
PORT=3333 npm run start
```

## Access urls

```bash
# Master controller
http://localhost:3345/master

# Slaves
# index page used as alias for easier access
http://localhost:3345/slave
http://localhost:3345/
```
