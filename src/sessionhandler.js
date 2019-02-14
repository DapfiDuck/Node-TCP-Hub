const net = require("net");

const server = net.createServer((c) =>{

  var stage = 0;
  var aes = "";
  var ip = c.remoteAddress;

  // 'connection' listener
  console.log('Connection: '+ip);

  c.on('end', () => {
    console.log('client disconnected');
  });

  c.on('error', () => {
    c.write("400");
  })

  c.on('data', (data) => {

  });
});

server.listen(5219);
