const {conection} = require('./database/conection');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


// Iniciar APP
console.log("Iniciando APP");

// Conectar a DB
conection();

// Crear Servidor
const app = express();
const port = 3900;

// CORS
app.use(cors());

// Convertir body a objeto JS
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Crear Servidor y escuchar peticiones http
app.listen(port, () => {
    console.log("Servidor conectado en el puerto " + port);
})

