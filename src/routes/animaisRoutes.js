import express from "express";
import { getAllAnimais, getAnimaisById } from "../controllers/animaisController.js";

const router = express.Router();

router.get("/", getAllAnimais);
router.get("/:id", getAnimaisById);

export default router;