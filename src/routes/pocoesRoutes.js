import express from "express";
import { getAllPocoes } from "../controllers/pocoesController.js";

const router = express.Router();

router.get("/", getAllPocoes);

export default router;