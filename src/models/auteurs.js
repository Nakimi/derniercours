import { Schema, model } from "mongoose";

const AuteursSchema = new Schema({
    name: { type: String, required: true },
    bio: { type: String }
});

export default model("Auteurs", AuteursSchema);