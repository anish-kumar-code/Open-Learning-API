import mongoose from "mongoose";
import postModel from "../../../models/postModel.js"

const postByCategory = async (req, res) => {

    try {
        const { cid } = req.params
        if (!mongoose.Types.ObjectId.isValid(cid)) return res.status(400).json({ statusCode: 400, message: "Invalid category ID" });

        const allPosts = await postModel.find({ category: cid });
        return res.status(200).json({ statusCode: 200, message: "Post list", length: allPosts.length, allPosts });

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }

}

export default postByCategory;