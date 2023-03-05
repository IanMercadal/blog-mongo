const {conection} = require('./database/conection');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('path');


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

// HANDLERBARS
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// Crear rutas
const article_routes = require('./routes/article');
const user_routes = require('./routes/user');

// Cargando las rutas
app.use("/article", article_routes);
app.use("/", user_routes);

app.get("/", (req,res) => {
    res.render('index', {
        page: "Index"
    })
})


// Mover a controller
app.get("/policy", (req,res) => {
    res.render('news', {
        title: "Policy",
        page: "Policy"
    })
})

// Mover a controller
app.get("/sports", (req,res) => {
    res.render('news', {
        title: "Sports",
        page: "Sports"
    })
})

// Mover a controller
app.get("/curious", (req,res) => {
    res.render('news', {
        title: "Curious",
        page: "Curious"
    })
})

// Mover a controller
app.get("/new", (req,res) => {
    res.render('new', {
        title: "New Title",
    })
})

// Crear Servidor y escuchar peticiones http
app.listen(port, () => {
    console.log("Servidor conectado en el puerto " + port);
})

