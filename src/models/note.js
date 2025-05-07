
import { Schema, model } from "mongoose";


const NoteSchema = new Schema({
    id_note: { type: Number, required: true },
    note: { type: Number, required: true },
    id_matiere: { type: Schema.Types.ObjectId, required: true },
    id_eleve: { type: Schema.Types.ObjectId, required: true }
});

export default model("Note", NoteSchema);