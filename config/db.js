import { connect } from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connecté");
  } catch (err) {
    console.error("❌ Erreur MongoDB :", err);
    process.exit(1); // Arrêter le serveur en cas d'erreur
  }
};

export default connectDB;