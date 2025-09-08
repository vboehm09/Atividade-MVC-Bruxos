import dados from "../models/dados.js";
const { pocoes } = dados;

const getAllPocoes = (req, res) => {
    let resultado = pocoes;
    
    res.status(200).json({
        total: resultado.length,
        data: resultado
    })
};

export { getAllPocoes };