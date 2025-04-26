import express from "express";
import registerUser from "../controllers/user/auth/register.js";
import loginUser from "../controllers/user/auth/login.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import userProfile from "../controllers/user/auth/profile.js";

const router = express.Router();

// router.get("/test", (req, res) => {
//     res.send("This is test route in user api");
// })

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile", authMiddleware, userProfile)

export default router;