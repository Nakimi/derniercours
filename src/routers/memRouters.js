import { Router } from "express";
import Mem from "../models/moyenne_eleve_matiere.js";

const router = Router();

// Récupérer toutes les moyennes élève-matière
router.get("/", async (req, res) => {
  try {
    const mems = await Mem.find();
    res.json(mems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer une moyenne par son ID
router.get("/:id", async (req, res) => {
  try {
    const mem = await Mem.findById(req.params.id);
    if (!mem) return res.status(404).json({ message: "Donnée non trouvée" });
    res.json(mem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter une nouvelle moyenne élève-matière
router.post("/", async (req, res) => {
  try {
    const newMem = new Mem(req.body);
    await newMem.save();
    res.status(201).json(newMem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier complètement une moyenne
router.put("/:id", async (req, res) => {
  try {
    const updatedMem = await Mem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMem) {
      return res.status(404).json({ message: "Donnée non trouvée" });
    }
    res.json(updatedMem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier partiellement une moyenne
router.patch("/:id", async (req, res) => {
  try {
    const updatedMem = await Mem.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedMem) {
      return res.status(404).json({ message: "Donnée non trouvée" });
    }
    res.json(updatedMem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer une moyenne
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Mem.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Donnée non trouvée" });
    res.json({ message: "Donnée supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
