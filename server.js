// On importe les modules nécessaires
import express, { json } from "express";
import cors from "cors";

// Connexion à la base de données
import connectDB from "./config/db.js";

// Importation des routeurs
import eleveRouter from "./src/routers/eleveRouters.js";
import enseignantRouter from "./src/routers/enseignantRouters.js";
import matiereRouter from "./src/routers/matiereRouters.js";
import noteRouter from "./src/routers/noteRouters.js";
import memRouter from "./src/routers/memRouters.js";

// Port d'écoute
import PORT from "./config/config.js";

// Création de l'application Express
const app = express();

// Middleware pour parser le JSON
app.use(json());

// Middleware pour autoriser les requêtes CORS (Cross-Origin)
app.use(cors());

// Connexion à MongoDB
connectDB();

// ROUTES
app.get("/", (req, res) => { 
    res.send("API en ligne 🚀"); // Message d'accueil
});

// Utilisation des routeurs pour chaque ressource
app.use("/eleve", eleveRouter);
app.use("/enseignant", enseignantRouter); // ⚠️ Corrigé ici : /enseigant ➜ /enseignant
app.use("/matiere", matiereRouter);
app.use("/note", noteRouter);
app.use("/mem", memRouter);

// Démarrage du serveur
app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`));
