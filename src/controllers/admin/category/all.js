import categoryModel from "../../../models/categoryModel.js"

const allCategory = async (req, res) => {
    try {

        const allCategory = await categoryModel.find();
        return res.status(200).json({ statusCode: 200, message: "Category list", allCategory });

    } catch (error) {
        return res.status(500).json({ statusCode: 500, message: "Something went wrong", error: error.message })
    }
}

export default allCategory;