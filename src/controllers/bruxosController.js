import dados from "../models/dados.js";
const { bruxos } = dados;

const getAllBruxos = (req, res) => {
    let resultado = bruxos;
    
    res.status(200).json({
        total: resultado.length,
        data: resultado
    })
};

export { getAllBruxos };