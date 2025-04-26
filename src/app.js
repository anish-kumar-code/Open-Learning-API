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

router.get('/one', (req,res)=>{
    res.send("This is one page in app.js");
})


// app.use('/', router);
appRoutes(app)


export default app;