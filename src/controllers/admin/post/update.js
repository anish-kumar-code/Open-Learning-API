import postModel from "../../../models/postModel.js";
import deleteCloudinaryFile from "../../../utils/deleteCloudinaryFile.js";
import uploadToCloudinary from "../../../utils/uploadCloudinaryFile.js";

const updatePost = async (req, res) => {

    try {

        let { title, description, category } = req.body
        const { id } = req.params
        let image = req.file;

        const post = await postModel.findById(id);
        if (!post) return res.status(400).json({ statusCode: 400, message: "Post not found" });

        post.title = title || post.title
        post.description = description || post.description
        post.category = category || post.category

        let oldImage = post.image;

        if (image) {
            await deleteCloudinaryFile(oldImage.public_id);

            const result = await uploadToCloudinary(image.buffer);
            oldImage = { url: result.secure_url, public_id: result.public_id }
        }
        post.image = oldImage

        await post.save()
        return res.status(200).json({ statusCode: 200, message: "Post updated", post })

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }

}

export default updatePost;