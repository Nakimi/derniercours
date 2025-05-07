import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  name: String,
  price: Number
});

export default model("Item", ItemSchema);