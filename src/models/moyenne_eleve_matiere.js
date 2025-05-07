// On importe Schema et model depuis mongoose
import { Schema, model } from "mongoose";
// On importe mongoose complet (utile pour d'autres fonctions si besoin)
import mongoose from 'mongoose';

// On définit la structure des données pour une entrée "Mem"
// Représente probablement la moyenne d’un élève pour une matière donnée
const MemSchema = new Schema({
    id_mem: { type: Number, required: true },                     // Identifiant unique de l'entrée (obligatoire)
    id_matiere: { type: String, required: true },                 // ID de la matière (obligatoire) — à typer en ObjectId si lié à Matiere
    id_eleve: { type: Number, required: true },                   // ID de l'élève (obligatoire) — à relier au modèle Eleves si besoin
    moyenne_eleve_matiere: { type: Number, required: true }       // Moyenne de l'élève pour cette matière (obligatoire)
});

// On crée et exporte le modèle "Mem" basé sur ce schéma
export default model("Mem", MemSchema);
