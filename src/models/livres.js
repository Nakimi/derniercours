import { Schema, model } from "mongoose";
import mongoose from 'mongoose';


const LivresSchema = new Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Auteurs", required: true },
    summary: { type: String },
});

export default model("Livres", LivresSchema);