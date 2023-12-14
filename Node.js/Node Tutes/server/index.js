const http = require("http")

const fs = require("fs")
const { url } = require("inspector")

const myServer = http.createServer((req, res) => {
    
    const log = `${new Date().toLocaleString()}: ${req.url} : New request recieved \n`
    fs.appendFile("logs.txt", log, () => {
        switch(req.url){
            case "/" :
                res.end("Heyy!!! from server")
                break
            case "/about":
                res.end("server from about")
                break
            case "/contact":
                res.end("server from contact")
                break
            default: 
                res.end("404 : Page not found")
        }
    })
})

myServer.listen(1200, () => {
    console.log("Server started");
})