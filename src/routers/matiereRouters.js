import { Router } from "express";
const router = Router();
import Matiere from "../models/matiere.js";
import matiere from "../models/matiere.js";

router.get("/", async (req, res) => {
  try {
    const matiere = await Matiere.find();
    res.json(matiere);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const matiere = await Matiere.findById(req.params.id);
      res.json(matiere);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.post("/", async (req, res) => {
  try {
    const newMatiere = new Matiere(req.body);
    await newMatiere.save();
    res.json(newMatiere);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.put("/:id", async (req, res) => {
    try {
      const matiere = await Matiere.findById(req.params.id);
      res.json(matiere);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });
  

  router.patch("/:id", async (req, res) => {
    try {
      const matiere = await Matiere.findById(req.params.id);
      res.json(matiere);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    await Matiere.findByIdAndDelete(req.params.id);
    res.json({ message: "Matiere supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/moyenne/:id_matiere", async (req, res) => {
  try {
    const id_matiere = req.params.id_matiere;
    const notes = await Note.find({ id_matiere });
    const moyenne = calculerMoyenneParMatiere(notes, id_matiere);
    res.json({ moyenne });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;