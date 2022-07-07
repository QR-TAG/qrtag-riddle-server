const http = require('http');

const riddle = 'Riddle';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/json'});
  res.end(riddle);
}).listen(process.env.PORT ?? 3000);