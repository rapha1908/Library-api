import express from "express"

const app = express();
app.use(express.json());

const livros = [
    {
        id:"01",
        name:"O senhor dos aneis"
    },
    {
        id:"02",
        name:"O Hobbit"
    }
]


app.get("/", (req,res) =>{
    res.status(200).send("Curso De Node");
})

app.get("/livros", (req,res) =>{
    res.status(200).json(livros)
})
app.post("/livros", (req,res) =>{
    livros.push(req.body)
    res.status(201).send("livros cadastrados com sucesso")
});

export default app;