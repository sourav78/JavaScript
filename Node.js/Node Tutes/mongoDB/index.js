const mongoose = require("mongoose")
const express = require("express")
const PORT = 8000

const app = express()



//connecting mongoDB

mongoose.connect("mongodb://127.0.0.1:27017/nodeMongo")
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Mongo error", err))

//define mongoDB Schema

//gender enum
const genderEnum = ["male", "female", "others"]

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: genderEnum
    }
})

const userModel = mongoose.model("user", userSchema)

// middle ware Plugin
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>This is home page with nodemon</h1>")
})

app.get("/users", (req, res) => {
    

    res.send("Usre julu")
})

app.post("/test", (req, res) => {
    console.log(req.body);
    res.send('Check the console for the request body');
});

app.post("/api/users", async (req, res) => {
    const body = req.body
    console.log("Body is", body);

    if (!body || !body.firstName || !body.lastName || !body.email || !body.gender || !body.jobTitle) {
        return res.status(400).json({ "status": "Please provide valid information" })
    }

    const result = await userModel.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender,
    })

    console.log(result);

    return res.status(200).json({ status: "Created" })
})

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))