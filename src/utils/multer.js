
import multer from "multer"

// Use memory storage since we upload manually to Cloudinary
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
