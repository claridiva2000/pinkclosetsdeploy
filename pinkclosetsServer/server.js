const http = require('http');

const server = http.createServer((req, res) => {
  console.log('server working!');
});

server.listen(4000);
