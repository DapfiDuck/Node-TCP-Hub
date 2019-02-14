const net = require("net");

var clients = [];

const server = net.createServer((c) => {

  // 'connection' listener
  console.log("client connected");
  //clients.push(c);

  c.on('end', () => {
    console.log('client disconnected');
    //dc(c)
  });

  c.on('error', () => {
    c.write("400");
  });

  c.on('data', (data) => {

    console.log(data.toString())
    writeAll(c, data);

  });

});

function writeAll(exclude, buffer) {

  clients.forEach((client) => {
    if(client != exclude) {
      client.write(buffer);
    }
  });

}

function dc(client) {
  console.log("Removing from list");
  var index = clients.indexOf(client);

  if (index > -1) {
    console.log(clients.length);
    //clients.splice(index, 1);
  } else {
    console.log("client not found");
  }

}

server.listen(1234);
