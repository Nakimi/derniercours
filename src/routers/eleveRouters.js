import { Router } from "express";
const router = Router();
import Eleves from "../models/eleve.js";
import eleve from "../models/eleve.js";

router.get("/", async (req, res) => {
  try {
    const eleve = await Eleves.find();
    res.json(eleve);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const eleve = await Eleves.findById(req.params.id);
      res.json(eleve);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });

router.post("/", async (req, res) => {
  try {
    const newEleves = new Eleves(req.body);
    await newEleves.save();
    res.json(newEleves);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedEleve = await Eleves.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // `new: true` retourne l'objet mis à jour
    );
    if (!updatedEleve) {
      return res.status(404).json({ message: "Élève non trouvé" });
    }
    res.json(updatedEleve);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
 
  

  router.patch("/:id", async (req, res) => {
    try {
      const eleve = await Eleves.findById(req.params.id);
      res.json(eleve);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    await Eleves.findByIdAndDelete(req.params.id);
    res.json({ message: "Eleves supprimé" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;