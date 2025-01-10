import express from "express"
import connectDatabase from "./config/dbConection.js";
import routes from "./routes/index.js";

const app = express();
routes(app)

const connection = await connectDatabase()

connection.on("error", (erro)=>{
    console.error("erro de coneçao", erro)
})

connection.once("open", ()=>{
    console.log("foi")
})

/*
app.delete("/livros/:id", (req,res) =>{
    const index =  buscaLivro(req.params.id)
    livros.splice(index,1)
    res.status(200).send("Livro deletado com sucesso")
})


app.post("/livros", (req,res) =>{
    livros.push(req.body)
    res.status(201).send("livros cadastrados com sucesso")
});
*/

export default app;

