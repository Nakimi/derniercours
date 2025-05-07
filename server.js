import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import eleveRouter from "./src/routers/eleveRouters.js";
import enseignantRouter from "./src/routers/enseignantRouters.js";
import matiereRouter from "./src/routers/matiereRouters.js";
import noteRouter from "./src/routers/noteRouters.js";
import memRouter from "./src/routers/memRouters.js";
import PORT from "./config/config.js";

const app = express();
app.use(json());
app.use(cors());

connectDB();

// ROUTES
app.get("/", (req, res) => { res.send("API en ligne 🚀"); });
app.use("/eleve", eleveRouter);
app.use("/enseigant", enseignantRouter);
app.use("/matiere", matiereRouter);
app.use("/note", noteRouter);
app.use("/mem", memRouter);

app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`));