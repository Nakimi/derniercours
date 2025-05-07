//Import schema et model depuis mongoose
import { Schema, model } from "mongoose";

//On définit la structure des données pour un élève
const ElevesSchema = new Schema({
    nom_eleve: { type: String, required: true },
    prenom_eleve: { type: String, required: true },
    moyenne_gen_eleve: { type: Number, default: 0 }
});

//On crée et exporte le modèle "Eleves" basé sur ce schéma
export default model("Eleves", ElevesSchema);
