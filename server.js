import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import itemsRouter from "./src/routers/itemsRouters.js";
import auteursRouter from "./src/routers/auteursRouters.js";
import livresRouter from "./src/routers/livresRouters.js";
import PORT from "./config/config.js";

const app = express();
app.use(json());
app.use(cors());

connectDB();

// ROUTES
app.get("/", (req, res) => { res.send("API en ligne 🚀"); });
app.use("/items", itemsRouter);
app.use("/auteurs", auteursRouter);
app.use("/livres", livresRouter);

app.listen(PORT, () => console.log(`🚀 Serveur sur http://localhost:${PORT}`));