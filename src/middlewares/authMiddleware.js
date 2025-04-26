import jwt from "jsonwebtoken";
import 'dotenv/config'

const authMiddleware = (req, res, next) => {

    const token = req.header("Authorization");

    if (!token) return res.status(400).json({ statusCode: 400, message: "Access denied. No token provided." });

    try {
        const tokenWithoutBearer = token.split(" ")[1]

        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(400).json({ statusCode: 400, message: "Invalid token." });
    }

}

export default authMiddleware;