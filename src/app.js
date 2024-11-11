import express from "express"

const app = express();

app.get("/", (req,res) =>{
    res.status(200).send("Curso De Node");
})


export default app;