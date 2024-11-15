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


const livros = [
    {
        id:1,
        name:"O senhor dos aneis"
    },
    {
        id:2,
        name:"O Hobbit"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro=>{
        return livro.id === Number(id)
    })
}


app.get("/livros/:id", (req,res) =>{
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.put("/livros/:id", (req,res) =>{
    const index =  buscaLivro(req.params.id)
    livros[index].name = req.body.name
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req,res) =>{
    const index =  buscaLivro(req.params.id)
    livros.splice(index,1)
    res.status(200).send("Livro deletado com sucesso")
})


app.post("/livros", (req,res) =>{
    livros.push(req.body)
    res.status(201).send("livros cadastrados com sucesso")
});

export default app;

