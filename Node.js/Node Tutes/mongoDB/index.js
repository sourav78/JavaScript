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
}, {timestamps: true})

const userModel = mongoose.model("user", userSchema)

// middle ware Plugin
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>This is home page with nodemon</h1>")
})

app.get("/users", async (req, res) => {
    
    const dbUsers = await userModel.find({})

    const listOfUsers = `
        <ul>
            ${dbUsers.map((ele) => `<li>${ele.firstName} ${ele.lastName} - ${ele.email}</li>`).join("")}
        </ul>
    `
    
    res.send(listOfUsers)
})

app.get("/api/users", async(req, res) => {
    const dbUsers = await userModel.find({})

    console.log(dbUsers.length);

    res.json(dbUsers)
})

app.route("/api/users/:id").get( async (req, res) => {

    const usersData = await userModel.findById(req.params.id)

    // const users = usersData.find(user => user.id === userID)
    if(!usersData) return res.status(404).json({status: "Page not found"})
    
    res.json(usersData)
}).patch( async (req, res) => {
    const updateUser = await userModel.findByIdAndUpdate(req.params.id, {jobTitle: "devloper"})

    // console.log(updateUser);

    return res.json({msg: "success"})
}).delete( async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id)

    return res.json({msg: "Deleted"})
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