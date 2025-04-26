import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import appRoutes from "./routes/appRoutes.js";


const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = express.Router();

appRoutes(app)

// app.use('*', (req, res) => {
//     res.status(404).json({ message: 'Route not found' });
// });


export default app;