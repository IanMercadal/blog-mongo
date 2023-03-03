const Article = require('../models/Article');

const prueba = (req,res) => {
    return res.status(200).json({
        status: "success",
        mensaje: "Ruta correcta"
    });
}

module.exports = {
    prueba
}