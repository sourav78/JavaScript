const express = require('express');
const fs = require('fs');
const status = require('express-status-monitor');
const app = express();


app.use(status());

app.get('/', (req, res) => {
  // fs.readFile('./Source.txt', (err, data) => {
  //   if (err) {
  //     res.status(500).send('Error reading file');
  //     return;
  //   }
  //   res.end(data);
  // });

  const readStream = fs.createReadStream('./Source.txt', 'utf8');

  readStream.on('data', (chunk) => {
    res.write(chunk);
  });

  readStream.on('end', () => {
    res.end();
  });
});

app.get('/stream', (req, res) => {
  console.log('Client requested the file...');

  const filePath = './Source.txt';

  // 1. Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found');
  }

  // 2. Set headers
  // This tells the browser to treat it as a plain text file
  res.setHeader('Content-Type', 'text/plain');

  // (Optional) This tells the browser to download it as 'data.txt'
  // Comment this out if you want the browser to *display* it instead
  res.setHeader('Content-Disposition', 'attachment; filename="data.txt"');


  // 3. Create the Readable Stream
  const fileStream = fs.createReadStream(filePath);

  // 4. Handle errors on the stream (e.g., file deleted mid-stream)
  fileStream.on('error', (err) => {
    console.error('Stream error:', err);
    res.status(500).send('Error streaming file');
  });

  // 5. Pipe the file stream directly to the response stream
  // This is the magic!
  fileStream.pipe(res);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});