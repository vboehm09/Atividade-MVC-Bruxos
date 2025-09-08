import express from "express";
import dotenv from "dotenv";
import bruxosRoutes from "./src/routes/bruxosRoutes.js";
import pocoesRoutes from "./src/routes/pocoesRoutes.js";
import animaisRoutes from "./src/routes/animaisRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use("/bruxos", bruxosRoutes);
app.use("/pocoes", pocoesRoutes);
app.use("/animais", animaisRoutes)

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
    
});