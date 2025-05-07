import { Router } from "express";
const router = Router();
import Enseignants from "../models/enseignant.js";

router.get("/", async (req, res) => {
  try {
    const enseignant = await Enseignants.find();
    res.json(enseignant);
  } catch (err) {
    res.status(500).json({ message: "err" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const enseignant = await Enseignants.findById(req.params.id);
      res.json(enseignant);
    } catch (err) {
      res.status(500).json({ message: "err" });
    }
  });

router.post("/", async (req, res) => {
  try {
    const newEnseignants = new Enseignants(req.body);
    await newEnseignants.save();
    res.json(newEnseignants);
  } catch (err) {
    res.status(500).json({ message: "err" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedEnseignant = await Enseignants.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // `new: true` retourne l'objet mis à jour
    );
    if (!updatedEnseignant) {
      return res.status(404).json({ message: "Prof non trouvé" });
    }
    res.json(updatedEnseignant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
  

  router.patch("/:id", async (req, res) => {
    try {
      const enseignant = await Enseignants.findById(req.params.id);
      res.json(enseignant);
    } catch (err) {
      res.status(500).json({ message: "err" });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    await Enseignants.findByIdAndDelete(req.params.id);
    res.json({ message: "Enseignants supprimé" });
  } catch (err) {
    res.status(500).json({ message: "err" });
  }
});

export default router;