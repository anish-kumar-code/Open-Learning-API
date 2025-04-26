import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: { type: String, required: [true, "Enter category name"] },
    status: { type: Boolean, default: true }
})

const categoryModel = mongoose.model("category", categorySchema)
export default categoryModel;