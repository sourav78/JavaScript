const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    course: String,
    roll: Number,
});
  
const UserModel = mongoose.model('student', userSchema);

mongoose.connect("mongodb://127.0.0.1:27017/student_db")
.then(async () => {
    const myData = await UserModel.find({})

    console.log(myData);
})
.catch((err) => console.log(err))

