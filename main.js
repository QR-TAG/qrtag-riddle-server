const http = require('http');

const riddle = 'What has a head, a tail, is brown, and has no legs?';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/json'});
  res.end(riddle);
}).listen(process.env.port ?? 3000);