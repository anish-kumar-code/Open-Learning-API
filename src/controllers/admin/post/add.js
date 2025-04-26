import mongoose from "mongoose";
import postModel from "../../../models/postModel.js";
import uploadToCloudinary from "../../../utils/uploadCloudinaryFile.js";

const addPost = async (req, res) => {

    try {

        let { title, description, category } = req.body
        let image = req.file;

        if (!title) return res.status(400).json({ statusCode: 400, message: "Title is required" });
        if (!description) return res.status(400).json({ statusCode: 400, message: "Description is required" });
        if (!category) return res.status(400).json({ statusCode: 400, message: "Category is required" });
        if (!mongoose.Types.ObjectId.isValid(category)) return res.status(400).json({ statusCode: 400, message: "Invalid category ID" });

        if (!image) return res.status(400).json({ statusCode: 400, message: "Image is required" });

        const result = await uploadToCloudinary(image.buffer)

        const imgUrl = result.secure_url;
        const public_id = result.public_id;

        const post = new postModel({ title, description, category, image: { url: imgUrl, public_id: public_id } })
        await post.save();

        return res.status(200).json({ statusCode: 200, message: "Post added", post })

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default addPost;