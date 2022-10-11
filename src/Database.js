var mysql = require('mysql2/promise');
const {DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST} = require('./config.js');

var pool = mysql.createPool({ //Conexión a la base de datos
    host:DB_HOST,
    port:DB_PORT,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = {pool};