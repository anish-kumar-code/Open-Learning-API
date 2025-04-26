import userModel from "../../../models/userModel.js";
import 'dotenv/config'

const userProfile = async (req, res) => {
    try {
        const id = req.user.id;

        const user = await userModel.findById(id).select("-password");
        return res.status(200).json({ statusCode: 200, message: "User Profile", user })

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default userProfile;