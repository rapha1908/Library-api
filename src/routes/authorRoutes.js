import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/author", AuthorController.ListAuthor)
routes.get("/author/:id", AuthorController.listAuthorById)
routes.post("/author", AuthorController.addAuthors)
routes.put("/author/:id", AuthorController.updateAuthor)
routes.delete("/author/:id", AuthorController.deleteAuthor)

export default routes