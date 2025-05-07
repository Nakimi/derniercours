import { Schema, model } from "mongoose";
import mongoose from 'mongoose';


const MemSchema = new Schema({
    id_mem: { type: Number, required: true },
    id_matiere: { type: String, required: true },
    id_eleve: { type: Number, required: true },
    moyenne_eleve_matiere: { type: Number, required: true}

});

export default model("Mem", MemSchema);