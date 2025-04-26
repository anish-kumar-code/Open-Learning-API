import userModel from "../../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const loginUser = async (req, res) => {
    try {

        let { email, password } = req.body;

        if (!email) return res.status(400).json({ statusCode: 400, message: "Email is required" });
        if (!password) return res.status(400).json({ statusCode: 400, message: "Password is required" });

        const user = await userModel.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ statusCode: 400, message: "Email or Password is wrong" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' })

        return res.status(200).json({ statusCode: 200, message: "User LoggedIn", token });

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default loginUser;