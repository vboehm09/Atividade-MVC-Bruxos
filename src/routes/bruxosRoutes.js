import express from "express";
import { getAllBruxos } from "../controllers/bruxosController.js";

const router = express.Router();

router.get("/", getAllBruxos);

export default router;