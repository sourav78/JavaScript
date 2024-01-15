const express = require('express')
const http = require('http')

const { Server } = require("socket.io");

const app = express()

app.use(express.static('./public'))

app.get("./", (req, res) => {
    return res.sendFile('./public/index.html')
})

const server = http.createServer(app)

const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('user-msg', (msg) => {
        io.emit("msg", msg)
    })
})

server.listen(9000, () => console.log('server started on port:', 9000))