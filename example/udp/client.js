const socket = require('../../lib/socket');

const client = socket.socket(socket.AF_INET, socket.SOCK_DGRAM,0);

const bf = new Uint8Array(100).fill(73);

client.sendto({address:'172.18.229.69', port: 8888},bf);