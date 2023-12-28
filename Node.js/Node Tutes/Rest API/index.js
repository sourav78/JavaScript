const express = require("express")
const fs = require("fs")
const usersData = require("./MOCK_DATA.json")
const app = express()
const PORT = 8888

// middle ware Plugin
app.use(express.urlencoded({extended: false}))

//Routes

app.get("/", (req, res) => {
    res.send("<h1>This is home page</h1>")
})

app.get("/users", (req, res) => {
    let userName = `
    <ul>
        ${usersData.map((ele) =>`<li>${ele.first_name}</li>`).join("")}
    </ul>
    `

    res.send(userName)
})

app.get("/api/users", (req, res) => {

    

    res.json(usersData)
})

//Grouping the methods in same routes

app.route("/api/users/:id").get((req, res) => {
    const userID = Number(req.params.id)

    const users = usersData.find(user => user.id === userID)

    res.json(users)
}).patch((req, res) => {
    res.json({status: "Pending"})
}).delete((req, res) => {
    res.json({status: "Pending"})
})

app.post("/api/users", (req, res) => {

    const body = req.body

    usersData.push({ id: usersData.length + 1, ...body })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(usersData), (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.json({status: "OK", id: usersData.length})
        }
    })

    console.log(body);
    console.log(body.email);

})

app.get("/contact", (req, res) => {

    const { user, id } = req.query

    res.send(`<h1>userID: ${id} and user name is: ${user}</h1>`)
})

// app.patch("/api/users/:id", (req, res) => {
//     res.json({status: "Pending"})
// })

// app.delete("/api/users/:id", (req, res) => {
//     res.json({status: "Pending"})
// })

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))