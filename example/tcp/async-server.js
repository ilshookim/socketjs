const socket = require('../../lib/socket');

const server = socket.socket(socket.AF_INET,socket.SOCK_STREAM, 0);

process.on('beforeExit', () => {
  console.log('on exit');
  server.close();
});

server.bind(8886);

const result = server.listen();

server.asyncAccept((error,client) =>{
  if(error){
    console.log('async accept error:', e);
    return;
  }

  client.asyncRecv(100, 0, (err, result) => {
    if(err) {
      console.log('error');
      client.close(c);
      return;
    }
    if (result.length) {
      console.log(String.fromCharCode(...result));
    } else if (client.closeStatus) {
      client.close();
    }
  })

});

console.log('end');