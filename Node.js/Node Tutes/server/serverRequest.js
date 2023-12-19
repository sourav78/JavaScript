const http = require("http")

const option = {
    hostname: "fakestoreapi.com",
    path: "/products/3",
    method: "GET"
}

const apiReq = http.request(option, (res) => {
    res.on("data", (data) => {
        console.log(JSON.parse(data.toString()));
    })

    res.on("error", (e) => {
        console.log(e);
    })
})

apiReq.end()