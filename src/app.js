const express = require('express');
const app = express();
const morgan = require('morgan');

//Opciones

app.set('json spaces', 2);

//Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //Soportamos datos de formularios http y eso
app.use(express.json());

//Rutas

app.use('/api', require('./routes/index.js'));
app.use('/api/pokeapi', require('./routes/pokemon.js'));

app.use((req, res, next) => { //Si no encuentra la ruta
    res.status(404).json("Error al acceder a la ruta especificada, compruebe que escribió bien la URL");
});

module.exports = {app};