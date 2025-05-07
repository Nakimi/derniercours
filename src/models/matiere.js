// On importe Schema et model depuis mongoose
import { Schema, model } from "mongoose";
// On importe mongoose complet (utile si on veut utiliser mongoose.Types plus tard)
import mongoose from 'mongoose';

// On définit la structure des données pour une matière
const MatiereSchema = new Schema({
    id_matiere: { type: Number, required: true },         // Identifiant unique de la matière (obligatoire)
    libelle: { type: String, required: true },            // Nom ou libellé de la matière (obligatoire)
    moyenne_matiere: { type: Number }                     // Moyenne générale pour cette matière (facultatif)
});

// On crée et exporte le modèle "Matiere" basé sur ce schéma
export default model("Matiere", MatiereSchema);
