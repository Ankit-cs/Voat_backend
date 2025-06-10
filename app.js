import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
const app=express();
const PORT=3000 || process.env.PORT
dotenv.config();
app.use(express.json());
app.use(cors());




app.use("/",(req,res)=>{
    res.send("Hey");
})


app.listen(PORT, () => {
    console.log(`server is listening on https://www.localhost:${PORT}`);
});