import mongoose from "mongoose";
import categoryModel from "../../../models/categoryModel.js";

const updateCategory = async (req, res) => {

    try {
        const { cid } = req.params;
        let { name } = req.body
        name = name.trim()

        if (!cid) return res.status(400).json({ statusCode: 400, message: "Category Id is required" });
        if (!mongoose.Types.ObjectId.isValid(cid)) return res.status(400).json({ statusCode: 400, message: "Invalid category ID" });

        if (!name) return res.status(400).json({ statusCode: 400, message: "Category Name is required" });

        const oldCategory = await categoryModel.findOne({ name });
        if (oldCategory) return res.status(400).json({ statusCode: 400, message: "Category already exists" });

        const category = await categoryModel.findOne({ _id: cid });
        category.name = name || category.name
        await category.save()

        return res.status(200).json({ statusCode: 200, message: "Category updated", category });

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }

}

export default updateCategory;