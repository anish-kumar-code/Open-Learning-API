import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Not Connected ❌❌❌")
        console.log(error)
        console.log("DB Not Connected ❌❌❌")
    }
}

export default connectDB;