import { Router } from "express";
import Note from "../models/note.js";

const router = Router();

// Récupérer toutes les notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer une note par ID
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note non trouvée" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter une nouvelle note
router.post("/", async (req, res) => {
  try {
    const newNote = new Note(req.body);
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier complètement une note
router.put("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedNote) return res.status(404).json({ message: "Note non trouvée" });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier partiellement une note
router.patch("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedNote) return res.status(404).json({ message: "Note non trouvée" });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer une note
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Note.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Note non trouvée" });
    res.json({ message: "Note supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
