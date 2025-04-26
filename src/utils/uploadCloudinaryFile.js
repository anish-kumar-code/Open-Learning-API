import cloudinary from "./cloudinary.js";
import streamifier from "streamifier";

const uploadToCloudinary = (fileBuffer, folder = 'test-e-commerce') => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
                if (error) {
                    console.error("Cloudinary upload error:", error); 
                    return reject(error); 
                }
                resolve(result); 
            }
        );

        // Create and pipe the file buffer into Cloudinary upload stream
        streamifier.createReadStream(fileBuffer).pipe(uploadStream);
    });
};

export default uploadToCloudinary;
