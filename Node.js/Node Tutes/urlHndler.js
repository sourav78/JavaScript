const url = require("url")
const http = require("http")

const myServer = http.createServer((req, res) => {

    if(req.url === "/favicon.ico") return res.end()

    myurl  = url.parse(req.url, true)
    console.log(myurl);
    
    switch(myurl.pathname){
        case "/" :
            res.end("<h1>Heyy!!! from server</h1>")
            break
        case "/about":
            res.end(`<h1>server from about ${myurl.query.search}</h1>`)
            break
        case "/contact":
            res.end("<h1>server from contact</h1>")
            break
        default: 
            res.end("<h1>404 : Page not found</h1>")
    }
    
})

myServer.listen(8000, () => {
    console.log("Server started");
})