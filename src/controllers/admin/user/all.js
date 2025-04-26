import userModel from "../../../models/userModel.js";

const allUser = async (req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).json({ statusCode: 200, message: "User list", length: users.length, users });
    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default allUser;