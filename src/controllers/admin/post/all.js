import postModel from "../../../models/postModel.js"

const allPost = async (req, res) => {

    try {
        const allPosts = await postModel.find();
        return res.status(200).json({ statusCode: 200, message: "Post list", length: allPosts.length, allPosts });

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }

}

export default allPost;