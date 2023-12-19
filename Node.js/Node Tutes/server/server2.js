const http = require("http")

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>This is sourav's server</h1>")
})

server.listen(8200, () => {
    console.log("Server started in port: 8200");
})