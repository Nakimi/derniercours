import { Router } from "express";
import Matiere from "../models/matiere.js";

const router = Router();

// Récupérer toutes les matières
router.get("/", async (req, res) => {
  try {
    const matieres = await Matiere.find();
    res.json(matieres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer une matière par ID
router.get("/:id", async (req, res) => {
  try {
    const matiere = await Matiere.findById(req.params.id);
    if (!matiere) return res.status(404).json({ message: "Matière non trouvée" });
    res.json(matiere);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter une nouvelle matière
router.post("/", async (req, res) => {
  try {
    const newMatiere = new Matiere(req.body);
    await newMatiere.save();
    res.status(201).json(newMatiere);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier complètement une matière
router.put("/:id", async (req, res) => {
  try {
    const updatedMatiere = await Matiere.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMatiere) {
      return res.status(404).json({ message: "Matière non trouvée" });
    }
    res.json(updatedMatiere);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier partiellement une matière
router.patch("/:id", async (req, res) => {
  try {
    const updatedMatiere = await Matiere.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedMatiere) {
      return res.status(404).json({ message: "Matière non trouvée" });
    }
    res.json(updatedMatiere);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer une matière
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Matiere.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Matière non trouvée" });
    res.json({ message: "Matière supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
