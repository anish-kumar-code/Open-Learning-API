import categoryModel from "../../../models/categoryModel.js"

const addCategory = async (req, res) => {

    try {
        let { name } = req.body
        name = name.trim()

        if (!name) return res.status(400).json({ statusCode: 400, message: "Category Name is required" });

        const oldCategory = await categoryModel.findOne({ name });
        if (oldCategory) return res.status(400).json({ statusCode: 400, message: "Category already exists" });

        const category = new categoryModel({ name });
        await category.save()

        return res.status(200).json({ statusCode: 200, message: "Category added", category });

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }

}

export default addCategory;