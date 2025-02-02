import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({});

const app = express();

const SECRET_KEY = "EIEIEIEIEIEI";

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.post('/', (req, res) => {
    res.cookie("token", "my name is this");
})

const corsOption = {}

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})