const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  course: String,
  roll: Number,
});

const UserModel = mongoose.model('student', userSchema);

// UserModel.find({}).exec()
// .then((ele) => console.log(ele))

const getData = async () => {
    const myData = await UserModel.find({})

    console.log(myData);
}

getData()