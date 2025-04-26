import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    title: { type: String, required: [true, "Enter post title"] },
    image: { url: { type: String }, public_id: { type: String } },
    description: { type: String, required: [true, "Enter post description"] },
    category: { type: mongoose.Schema.ObjectId, ref: "category" },
    status: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
})

const postModel = mongoose.model("post", postSchema);
export default postModel;
