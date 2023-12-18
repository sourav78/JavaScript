const http = require("http")

const fs = require("fs")

const myServer = http.createServer((req, res) => {
    
    const log = `${new Date().toLocaleString()}: ${req.url} : New request recieved \n`
    fs.appendFile("logs.txt", log, () => {
        switch(req.url){
            case "/" :
                res.end("<h1>Heyy!!! from server</h1>")
                break
            case "/about":
                res.end("<h1>server from about</h1>")
                break
            case "/contact":
                res.end("<h1>server from contact</h1>")
                break
            default: 
                res.end("<h1>404 : Page not found</h1>")
        }
    })
})

myServer.listen(1200, () => {
    console.log("Server started");
})