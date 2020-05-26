const http = require('http');



const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
  }
const server = http.createServer(requestListener)

server.listen(8000, ()=> {
    console.log('server is running on port 8000');
})

