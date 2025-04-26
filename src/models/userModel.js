import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: [true, "Enter Your Name"] },
    email: { type: String, required: [true, "Enter Your Email"], unique: true },
    phone: { type: String, required: [true, "Enter Your Phone no"], unique: true },
    password: { type: String, required: [true, "Enter Password"] },
})

const userModel = mongoose.model("user", userSchema)
export default userModel;