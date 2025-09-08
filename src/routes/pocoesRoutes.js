import express from "express";
import { getAllPocoes, getPocoesById } from "../controllers/pocoesController.js";

const router = express.Router();

router.get("/", getAllPocoes);
router.get("/:id", getPocoesById);

export default router;