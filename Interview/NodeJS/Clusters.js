const cluster = require('cluster');
const http = require('http');
const os = require('os');

// Get the number of available CPU cores
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  // --- This is the PRIMARY (Manager) process ---
  
  console.log(`Primary process ${process.pid} is running`);

  // Fork workers - one for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for when a worker crashes
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
    cluster.fork(); // Create a replacement worker
  });

} else {
  // --- This is a WORKER process ---

  // All workers will share the SAME port (e.g., 8000)
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    // Send a response to show which worker handled the request
    res.end(`Hello from worker ${process.pid}`);
  });

  server.listen(8000);
  console.log(`Worker ${process.pid} started and listening on port 8000`);
}