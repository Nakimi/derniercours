import { Router } from "express";
const router = Router();
import Livres from "../models/livres.js";

router.get("/", async (req, res) => {
  try {
    const livres = await Livres.find();
    res.json(livres);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const livres = await Livres.findById(req.params.id).populate("author");
      res.json(livres);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.post("/", async (req, res) => {
  try {
    const newLivres = new Livres(req.body);
    await newLivres.save();
    res.json(newLivres);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.put("/:id", async (req, res) => {
    try {
      const livres = await Livres.findById();
      res.json(livres);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      const livres = await Livres.findById();
      res.json(livres);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    await Livres.findByIdAndDelete(req.params.id);
    res.json({ message: "Livres supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;