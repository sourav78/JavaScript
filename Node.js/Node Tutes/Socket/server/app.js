import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import cors from 'cors'

const app = express()

const PORT = 3000
const server = http.createServer(app)

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    credentials: true
}))

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST'],
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("User qconnected", socket.id);
    // socket.emit("welcome", `Welcome to the server ${socket.id}`)
    // socket.broadcast.emit("welcome", `${socket.id} joined the server`)

    socket.on("message", ({message, room}) => {
        console.log(message);
        socket.to(room).emit("message", message)
    })

    socket.on("join-room", (roomName) => {
        console.log(roomName);
        socket.join(roomName)
    })

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })

})



app.get("/", (req, res) => {
    res.send("Hello Socket")
})

server.listen(PORT, () => console.log(`Server started : http://localhost:${PORT}`))