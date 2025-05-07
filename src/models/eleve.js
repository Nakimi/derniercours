//Import schema et model depuis mongoose
import { Schema, model } from "mongoose";

//On définit la structure des données pour un élève
const ElevesSchema = new Schema({
    nom_eleve: { type: String, required: true }, //le nom est obligatoire
    prenom_eleve: { type: String, required: true }, //le prénom est obligatoire
    moyenne_gen_eleve: { type: Number, default: 0 } //Moyenne gen, par défaut 0
});

//On crée et exporte le modèle "Eleves" basé sur ce schéma
export default model("Eleves", ElevesSchema);
