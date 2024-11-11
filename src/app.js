import express from "express"

const app = express();
app.use(express.json());

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

app.get("/", (req,res) =>{
    res.status(200).send("Curso De Node");
})

app.get("/livros", (req,res) =>{
    res.status(200).json(livros)
})

app.get("/livros/:id", (req,res) =>{
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.put("/livros/:id", (req,res) =>{
    const index =  buscaLivro(req.params.id)
    livros[index].name = req.body.name
    res.status(200).json(livros)
})


app.post("/livros", (req,res) =>{
    livros.push(req.body)
    res.status(201).send("livros cadastrados com sucesso")
});

export default app;