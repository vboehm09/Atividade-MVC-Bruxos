import express from "express";
import { getAllAnimais } from "../controllers/animaisController.js";

const router = express.Router();

router.get("/", getAllAnimais);

export default router;