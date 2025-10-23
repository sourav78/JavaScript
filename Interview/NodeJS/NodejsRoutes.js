const http = require("http")

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')

  // Home route
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Route")
    return
  }

  // Hello route
  if (req.url === "/hello" && req.method === "GET") {
    res.end("Hello world")
    return
  }

  
  // Hello POST route
  if (req.url === "/hello" && req.method === "POST") {
    const payload = {
      success: true,
      message: "Something is created.",
      data: [1, 2, 3]
    }
    res.end(JSON.stringify(payload))
    return
  }

})

// Listen the server in a port number
server.listen(3333)