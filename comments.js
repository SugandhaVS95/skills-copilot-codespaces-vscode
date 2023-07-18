const http = require('http');

// create web server
const server = http.createServer((req, res) => {
  // send HTTP header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // send response body as "Hello World"
  res.end('Hello World!\n');
});

// listen to port 3000
server.listen(3000, 'localhost', () => {
  // console will print the message
  console.log('Server running at http://localhost:3000/');
});
