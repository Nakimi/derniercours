import { Router } from "express";
import Enseignants from "../models/enseignant.js";

const router = Router();

// Récupérer tous les enseignants
router.get("/", async (req, res) => {
  try {
    const enseignants = await Enseignants.find();
    res.json(enseignants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer un enseignant par ID
router.get("/:id", async (req, res) => {
  try {
    const enseignant = await Enseignants.findById(req.params.id);
    if (!enseignant) return res.status(404).json({ message: "Enseignant non trouvé" });
    res.json(enseignant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter un nouvel enseignant
router.post("/", async (req, res) => {
  try {
    const newEnseignant = new Enseignants(req.body);
    await newEnseignant.save();
    res.status(201).json(newEnseignant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier complètement un enseignant
router.put("/:id", async (req, res) => {
  try {
    const updatedEnseignant = await Enseignants.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEnseignant) {
      return res.status(404).json({ message: "Enseignant non trouvé" });
    }
    res.json(updatedEnseignant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier partiellement un enseignant
router.patch("/:id", async (req, res) => {
  try {
    const updatedEnseignant = await Enseignants.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedEnseignant) {
      return res.status(404).json({ message: "Enseignant non trouvé" });
    }
    res.json(updatedEnseignant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer un enseignant
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Enseignants.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Enseignant non trouvé" });
    res.json({ message: "Enseignant supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
