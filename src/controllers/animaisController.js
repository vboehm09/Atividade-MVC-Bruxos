import dados from "../models/dados.js";
const { animais } = dados;

const getAllAnimais = (req, res) => {
    let resultado = animais;
    
    res.status(200).json({
        total: resultado.length,
        data: resultado
    })
};

export { getAllAnimais };