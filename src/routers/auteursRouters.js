import { Router } from "express";
const router = Router();
import Auteurs from "../models/auteurs.js";

router.get("/", async (req, res) => {
  try {
    const auteurs = await Auteurs.find();
    res.json(auteurs);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const auteurs = await Auteurs.findById();
      res.json(auteurs);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.post("/", async (req, res) => {
  try {
    const newAuteurs = new Auteurs(req.body);
    await newAuteurs.save();
    res.json(newAuteurs);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.put("/:id", async (req, res) => {
    try {
      const auteurs = await Auteurs.findById();
      res.json(auteurs);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });
  

  router.patch("/:id", async (req, res) => {
    try {
      const auteurs = await Auteurs.findById();
      res.json(auteurs);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    await Auteurs.findByIdAndDelete(req.params.id);
    res.json({ message: "Auteurs supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;