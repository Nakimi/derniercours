// On importe Schema et model depuis mongoose
import { Schema, model } from "mongoose";

// On définit la structure des données pour une note d'élève
const NoteSchema = new Schema({
    id_note: { type: Number, required: true },                                   // Identifiant unique de la note
    note: { type: Number, required: true },                                      // Valeur de la note
    id_matiere: { type: Schema.Types.ObjectId, ref: "Matiere", required: true }, // Référence à la matière
    id_eleve: { type: Schema.Types.ObjectId, ref: "Eleves", required: true }     // Référence à l'élève
});

// On crée et exporte le modèle "Note" basé sur ce schéma
export default model("Note", NoteSchema);
