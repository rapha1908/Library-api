import { author } from "../models/Author.js";



class AuthorController{

    static async ListAuthor(req,res){
        const listingAuthor = await author.find({})
        res.status(200).json(listingAuthor)
    }

    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const findAuthor = await author.findById(id);
            if (!findAuthor) {
                return res.status(404).json({ message: "Author não encontrado" });
            }
            res.status(200).json(findAuthor);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha em encontrar Author` });
        }
    }

    
    static async updateAuthor(req,res){
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Author atualizado"}) 
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha em Atualizar Author` })
        }
    }

    static async addAuthors(req,res){
        try {
            const newAuthor = await author.create(req.body)
            res.status(201).json( {message:"Author cadastrados com sucesso", author:newAuthor})
        } catch (error) {
            res.status(500).json({message: `Error ${error.message} - Problema em cadastrar o Author`})
        }
    }

    static async deleteAuthor(req,res){
        try{
            const id = req.params.id;
            await author.findByIdAndDelete(id)
            res.status(200).json({message: "Author deletado com sucesso"})


        }catch(error){
            res.status(500).json({message: `Error ${error.message} - Problema em Deletar o Author`})
        }
    }


};
export default AuthorController