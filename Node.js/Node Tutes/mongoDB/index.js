const express = require("express")
const ejs = require('ejs')
const path = require('path')
const PORT = 8000

const {router, router2} = require("./routes/user")
const {connectMongoDB} = require("./connection")

const app = express()
//setup ejs for server side rendering

app.set("view engine", "ejs")
app.set("views", path.resolve('./views'))


//connecting mongoDB

connectMongoDB("mongodb://127.0.0.1:27017/nodeMongo").then(() => {
    console.log("MongoDB Connected");
})

// middle ware Plugin
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//Routes

app.use("/api/users", router)
app.use("/users", router2)

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))