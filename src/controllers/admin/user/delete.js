import mongoose from "mongoose";
import userModel from "../../../models/userModel.js";

const deleteUser = async (req, res) => {
    try {

        const { uid } = req.params

        if (!uid) return res.status(400).json({ statusCode: 400, message: "User Id is required" });
        if (!mongoose.Types.ObjectId.isValid(uid)) return res.status(400).json({ statusCode: 400, message: "Invalid user ID" });

        const user = await userModel.findOne({ _id: uid })
        if (!user) return res.status(400).json({ statusCode: 400, message: "User not found" });

        await userModel.findOneAndDelete({ _id: uid })
        return res.status(200).json({ statusCode: 200, message: "User deleted" })

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default deleteUser;