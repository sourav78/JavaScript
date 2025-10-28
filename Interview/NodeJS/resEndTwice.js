// node server that demonstrates res.end() called twice issue
const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      res.end('Hello, World!\n'); // First call - this is fine
      
      // Second call - this will now be caught
      res.end(); 
    }
  } catch (err) {
    // The error is caught here
    console.error('--- ERROR CAUGHT ---');
    console.error(err);
    console.error('--------------------');
  }

  // capture errors
  res.on('error', (err) => {
    console.error('Response error:', err);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});