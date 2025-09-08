import dados from "../models/dados.js";
const { animais } = dados;

const getAllAnimais = (req, res) => {
    let resultado = animais;
    
    res.status(200).json({
        total: resultado.length,
        data: resultado
    })
};

const getAnimaisById = (req, res) => {
        const id = parseInt(req.params.id);

    const animal = animais.find (a => a.id === id);

    if(animal) {
        res.status(200).json(animal);
    } else {
        res.status(404).json({
            mensagem: "Animal não encontrado!"
        });    
    }
}

export { getAllAnimais, getAnimaisById};