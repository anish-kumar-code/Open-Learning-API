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

const router = express.Router()

router.post("/category/add", addCategory)
router.get("/category/list", allCategory)
router.get("/category/:cid", postByCategory)

router.post("/post/add", upload.single('image'), addPost)
router.get("/post/list", allPost)
router.get("/post/:id", detailPost);
router.delete("/post/delete/:id", deletePost)
router.patch("/post/update/:id", upload.single('image'), updatePost)

export default router;