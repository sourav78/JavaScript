const mongoose = require("mongoose")

function connectDB(){
    mongoose.connect("mongodb://127.0.0.1:27017/movie").then(() => {
        console.log("Database conneted");
    }).catch((err) => {
        console.log("Database not connected", err);
    })
}

module.exports = connectDB