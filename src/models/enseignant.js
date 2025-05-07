// On importe Schema et model depuis mongoose
import { Schema, model } from "mongoose";

// On définit la structure des données pour un enseignant
const EnseignantsSchema = new Schema({
    id_enseignant: { type: Number, required: true },             // Identifiant de l'enseignant (obligatoire)
    nom_enseignant: { type: String, required: true },            // Nom de l'enseignant (obligatoire)
    prenom_enseignant: { type: String, required: true },         // Prénom de l'enseignant (obligatoire)
    id_matiere: { type: Schema.Types.ObjectId, required: false } // Référence vers une matière (facultative)
});

// On crée et exporte le modèle "Enseignants" basé sur ce schéma
export default model("Enseignants", EnseignantsSchema);
