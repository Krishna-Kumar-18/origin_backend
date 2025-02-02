import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { METHODS } from "http";

dotenv.config({});

const app = express();

const SECRET_KEY = "EIEIEIEIEIEI";

const corsOption = {
    origin: 'https://origin-frontend-two.vercel.app',
    credientals:true,
    methods:["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization']

}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors(corsOption));




app.get('/this', (req, res) => {
    res.send("my origin project");
})

app.post('/', (req, res) => {
    res.cookie("token", "my name is this");
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})