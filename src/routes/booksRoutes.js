import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/livros", BookController.ListBooks)
routes.get("/livros/search", BookController.listBooksByEdited)
routes.get("/livros/:id", BookController.listBookById)
routes.post("/livros", BookController.addBooks)
routes.put("/livros/:id", BookController.updateBook)
routes.delete("/livros/:id", BookController.deleteBook)

export default routes