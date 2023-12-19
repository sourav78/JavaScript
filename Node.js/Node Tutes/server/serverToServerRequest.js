const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("This is home page")
    }else if(req.url === "/about"){
        res.end("This is about page")
    }else if(req.url === "/product"){

        const option = {
            hostname: "fakestoreapi.com",
            path: "/products/1",
            method: "GET"
        }

        const serverRequest = http.request(option, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200
                res.setHeader = ("Content-Type", "application/json")
                res.end(data.toString());
            })
        
        })
        
        serverRequest.on("error", (e) => {
            console.log(e);
        })

        serverRequest.end()

    }
})

server.listen(1111, () => {
    console.log("Server started");
})