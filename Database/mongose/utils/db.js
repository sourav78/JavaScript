const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/student_db";

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection Successful");
    } catch (error) {
        console.log("Database failed");
        process.exit(0)
    }
}

connectDb().then(() => {
    console.log("jjjj");
}).catch((err) => {
    console.log("kkk");
});