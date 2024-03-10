import mongoose from "mongoose";

export const connectDB = async () => {
    const {connection} = await mongoose.connect(process.env.MONGO_URI)
    if(connection){
        console.log("Database conneted");
    }else{
        console.log("Database not conneted");
    }
}