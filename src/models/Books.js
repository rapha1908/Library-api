import express from "express";
import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: { type: String, required: true },
    edited: { type: String },
    price: { type: Number },
    pages: { type: Number },
    author:  authorSchema 

}, { collection: "books", versionKey: false });

const book = mongoose.model("Book", bookSchema);


export default book