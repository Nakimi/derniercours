import { Schema, model } from "mongoose";

const EnseignantsSchema = new Schema({
    id_enseignant: { type: Number, required: true },
    nom_enseignant: { type: String, required: true },
    prenom_enseignant: { type: String, required: true },
    id_matiere: { type: Schema.Types.ObjectId, required: false },
});

export default model("Enseignants", EnseignantsSchema);