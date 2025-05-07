import { Schema, model } from "mongoose";

const ElevesSchema = new Schema({
    nom_eleve: { type: String, required: true },
    prenom_eleve: { type: String, required: true },
    moyenne_gen_eleve: { type: Number, default: 0 }
});

export default model("Eleves", ElevesSchema);