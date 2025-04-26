import postModel from "../../../models/postModel.js"
import deleteCloudinaryFile from "../../../utils/deleteCloudinaryFile.js";

const deletePost = async (req, res) => {

    try {
        const { id } = req.params
        if (!id) return res.status(400).json({ statusCode: 400, message: "Id is required" });

        const post = await postModel.findOne({ _id: id })
        if (!post) return res.status(400).json({ statusCode: 400, message: "Post not found" });

        await deleteCloudinaryFile(post.image.public_id);

        await postModel.findOneAndDelete({ _id: id })

        return res.status(200).json({ statusCode: 200, message: "Post deleted" })


    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default deletePost;