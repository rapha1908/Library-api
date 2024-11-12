import book from "../models/Books.js";

class BookController{

    static async ListBooks(req,res){
        const listingbooks = await book.find({})
        res.status(200).json(listingbooks)
    }

    static async addBooks(req,res){
        try {
            const newBook = await book.create(req.body)
            res.status(201).json( {message:"livros cadastrados com sucesso", book:newBook})
        } catch (error) {
            res.status(500).json({message: `Error ${error.message} - Problema em cadastrar o livro`})
        }
    }


};
export default BookController