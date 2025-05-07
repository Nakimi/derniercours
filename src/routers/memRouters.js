import { Router } from "express";
const router = Router();
import Mem from "../models/moyenne_eleve_matiere.js";

router.get("/", async (req, res) => {
  try {
    const mem = await Mem.find();
    res.json(mem);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const mem = await Mem.findById(req.params.id);
      res.json(mem);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.post("/", async (req, res) => {
  try {
    const newMem = new Mem(req.body);
    await newMem.save();
    res.json(newMem);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.put("/:id", async (req, res) => {
    try {
      const mem = await Mem.findById(req.params.id);
      res.json(mem);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });
  

  router.patch("/:id", async (req, res) => {
    try {
      const mem = await Mem.findById(req.params.id);
      res.json(mem);
    } catch (err) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    await Mem.findByIdAndDelete(req.params.id);
    res.json({ message: "Mem supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;