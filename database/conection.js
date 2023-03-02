const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const conection = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB);
        console.log("Conexión exitosa");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base datos")
    }
}

module.exports = {
    conection
}