import express from "express";
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    edited: { type: String },
    price: { type: Number },
    pages: { type: Number }
}, { collection: "books", versionKey: false });

const book = mongoose.model("Book", bookSchema);


export default book