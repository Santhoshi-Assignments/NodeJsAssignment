const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/data') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    
    const jsonData = {
      name: 'Marc Andre',
      age: 50,
      city: 'Las vegas',
      Country:'USA'
    };

    res.end(JSON.stringify(jsonData));
  } 
  else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
    });
    res.end('Not Found');
  }
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
