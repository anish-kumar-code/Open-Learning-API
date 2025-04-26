import express from "express";
import addCategory from "../controllers/admin/category/add.js";
import allCategory from "../controllers/admin/category/all.js";
import addPost from "../controllers/admin/post/add.js";
import upload from "../utils/multer.js";
import allPost from "../controllers/admin/post/all.js";
import detailPost from "../controllers/admin/post/details.js";
import deletePost from "../controllers/admin/post/delete.js";
import updatePost from "../controllers/admin/post/update.js";
import postByCategory from "../controllers/admin/post/viaCategory.js";
import deleteCategory from "../controllers/admin/category/delete.js";
import updateCategory from "../controllers/admin/category/update.js";
import allUser from "../controllers/admin/user/all.js";
import deleteUser from "../controllers/admin/user/delete.js";

const router = express.Router()

// category routes
router.post("/category/add", addCategory)
router.get("/category/list", allCategory)
router.get("/category/:cid", postByCategory)
router.delete("/category/delete/:cid", deleteCategory)
router.patch("/category/update/:cid", updateCategory)

// post routes
router.post("/post/add", upload.single('image'), addPost)
router.get("/post/list", allPost)
router.get("/post/:id", detailPost);
router.delete("/post/delete/:id", deletePost)
router.patch("/post/update/:id", upload.single('image'), updatePost)

// user routes
router.get("/user/list", allUser)
router.delete("/user/delete/:uid", deleteUser)

export default router;