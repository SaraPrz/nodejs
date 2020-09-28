var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  let time = [Date()]
    // sara: Date(),
  
  res.write(JSON.stringify(time));
  res.end();
}).listen(8082); 