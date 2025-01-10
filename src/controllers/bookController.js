import book from "../models/Books.js";



class BookController{

    static async ListBooks(req,res){
        const listingbooks = await book.find({})
        res.status(200).json(listingbooks)
    }

    static async listBookById(req, res) {
        try {
            const id = req.params.id;
            const findBook = await book.findById(id);
            if (!findBook) {
                return res.status(404).json({ message: "Livro não encontrado" });
            }
            res.status(200).json(findBook);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha em encontrar livro` });
        }
    }

    
    static async updateBook(req,res){
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"}) 
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha em Atualizar livro` })
        }
    }

    static async addBooks(req,res){
        try {
            const newBook = await book.create(req.body)
            res.status(201).json( {message:"livros cadastrados com sucesso", book:newBook})
        } catch (error) {
            res.status(500).json({message: `Error ${error.message} - Problema em cadastrar o livro`})
        }
    }

    static async deleteBook(req,res){
        try{
            const id = req.params.id;
            await book.findByIdAndDelete(id)
            res.status(200).json({message: "Livro deletado com sucesso"})


        }catch(error){
            res.status(500).json({message: `Error ${error.message} - Problema em Deletar o livro`})
        }
    }


};
export default BookController