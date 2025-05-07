import { Router } from "express";
const router = Router();
import Note from "../models/note.js";
import note from "../models/note.js";

router.get("/", async (req, res) => {
  try {
    const note = await Note.find();
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.json(note);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.post("/", async (req, res) => {
  try {
    const newNote = new Note(req.body);
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.put("/:id", async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.json(note);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });
  

  router.patch("/:id", async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.json(note);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;