const {config} = require('dotenv');

config();

const PORT = process.env.PORT || 3000;//En el .env
const DB_PORT = process.env.DB_PORT || 3000;
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE || 'pokemon_db';
const DB_HOST = process.env.DB_HOST|| 'localhost';

module.exports = {PORT, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST};
