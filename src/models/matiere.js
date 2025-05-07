import { Schema, model } from "mongoose";
import mongoose from 'mongoose';


const MatiereSchema = new Schema({
    id_matiere: { type: Number, required: true },
    libelle: { type: String, required: true },
    moyenne_matiere: { type: Number },
});

export default model("Matiere", MatiereSchema);