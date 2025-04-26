import postModel from "../../../models/postModel.js"

const detailPost = async (req, res) => {

    try {

        const { id } = req.params

        if (!id) return res.status(400).json({ statusCode: 400, message: "Id is required" });

        const post = await postModel.findById(id);
        return res.status(200).json({ statusCode: 200, message: "Post list", post });

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }

}

export default detailPost;