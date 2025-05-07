import { Router } from "express";
import Eleves from "../models/eleve.js";

const router = Router();

// Récupérer tous les élèves
router.get("/", async (req, res) => {
  try {
    const eleves = await Eleves.find();
    res.json(eleves);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer un élève par son ID
router.get("/:id", async (req, res) => {
  try {
    const eleve = await Eleves.findById(req.params.id);
    if (!eleve) return res.status(404).json({ message: "Élève non trouvé" });
    res.json(eleve);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter un nouvel élève
router.post("/", async (req, res) => {
  try {
    const newEleve = new Eleves(req.body);
    await newEleve.save();
    res.status(201).json(newEleve);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier complètement un élève
router.put("/:id", async (req, res) => {
  try {
    const updatedEleve = await Eleves.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEleve) {
      return res.status(404).json({ message: "Élève non trouvé" });
    }
    res.json(updatedEleve);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier partiellement un élève
router.patch("/:id", async (req, res) => {
  try {
    const updatedEleve = await Eleves.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedEleve) {
      return res.status(404).json({ message: "Élève non trouvé" });
    }
    res.json(updatedEleve);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer un élève
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Eleves.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Élève non trouvé" });
    res.json({ message: "Élève supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
