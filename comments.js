// create web server
// run this file using: node comments.js
// then go to browser and type: localhost:3000
// you should see the message Hello World! displayed in the browser window

var http = require('http');

// create web server
http.createServer(function (req, res) {
	// send HTTP header
	// HTTP status: 200 : OK
	// content type: text/plain
	res.writeHead(200, {'Content-Type': 'text/plain'});

	// send response body as "Hello World"
	res.end('Hello World!\n');
}).listen(3000);

// console will print the message
console.log('Server running at http://localhost:3000/');