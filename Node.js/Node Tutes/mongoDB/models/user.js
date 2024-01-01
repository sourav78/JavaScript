const mongoose = require("mongoose")

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

module.exports = userModel