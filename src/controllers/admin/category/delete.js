import mongoose from "mongoose";
import categoryModel from "../../../models/categoryModel.js";

const deleteCategory = async (req, res) => {
    try {
        const { cid } = req.params;
        if (!cid) return res.status(400).json({ statusCode: 400, message: "Category Id is required" });
        if (!mongoose.Types.ObjectId.isValid(cid)) return res.status(400).json({ statusCode: 400, message: "Invalid category ID" });

        const category = await categoryModel.findOne({ _id: cid })
        if (!category) return res.status(400).json({ statusCode: 400, message: "Category not found" });

        await categoryModel.findOneAndDelete({ _id: cid })
        return res.status(200).json({ statusCode: 200, message: "Category deleted" })

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default deleteCategory;