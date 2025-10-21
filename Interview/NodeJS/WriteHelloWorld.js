const http = require("http")

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end("Hello world")
})

// Listen the server in a port number
server.listen(3333)