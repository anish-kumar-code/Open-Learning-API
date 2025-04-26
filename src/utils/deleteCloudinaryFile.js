import cloudinary from "./cloudinary.js";

const deleteCloudinaryFile = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (err) {
        console.log("Cloudinary deletion failed:", err);
    }
};

export default deleteCloudinaryFile;