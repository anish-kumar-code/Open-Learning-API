import userModel from "../../../models/userModel.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {

    try {
        let { name, email, password, phone } = req.body

        const oldUser = await userModel.findOne({ email });
        if (oldUser) return res.status(400).json({ statusCode: 400, message: "User already registred" });

        if (!name) return res.status(400).json({ statusCode: 400, message: "Name is required" });
        if (!email) return res.status(400).json({ statusCode: 400, message: "Email is required" });
        if (!password) return res.status(400).json({ statusCode: 400, message: "Password is required" });
        if (!phone) return res.status(400).json({ statusCode: 400, message: "Phone no is required" });

        if (password.length < 6) return res.status(400).json({ statusCode: 400, message: "Password must be at least 6 charcter" });

        const hashPassword = await bcrypt.hash(password, 10)

        const user = new userModel({ name, email, password: hashPassword, phone });
        await user.save()
        return res.status(200).json({ statusCode: 200, message: "User registration done", user })
    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }

}

export default registerUser;