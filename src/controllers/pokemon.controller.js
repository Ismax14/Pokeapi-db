var pool = require('./../Database.js').pool;

const getPokemones = async (req,res) => {

    try{
        const [rows] = await pool.query('SELECT * FROM Pokemones');
        res.json(rows);

    } catch (error) {
        return res.status(500).json("Error en el servidor, lo sentimos :(");
    }
}

const getPokemon = async (req,res) => {
 
    try{
        const nombre = req.params.nombre;
        const [rows] = await pool.query("SELECT * FROM Pokemones WHERE nombre = ?", [nombre]);

        if (rows.length <= 0) res.status(404).json("No se ha encontrado ningún Pokemon con ese nombre")
        else res.json(rows);

    } catch (error) {
        return res.status(500).json("Error en el servidor, lo sentimos :(");
    }
}

const getTipo = async (req,res) => {

    try{
        const tipo = req.params.tipo;
        const [rows] = await pool.query("SELECT * FROM Pokemones WHERE tipo = ?", [tipo]);

        if (rows.length <= 0) res.status(404).json("No se ha encontrado ningún Pokemon con ese tipo")
        else res.json(rows);

    } catch (error) {
        return res.status(500).json("Error en el servidor, lo sentimos :(");
    }  
}

const postPokemon = async (req,res) => {

    try{
        const { nombre, tipo } = req.body;
        const [check] = await pool.query("SELECT * FROM Pokemones WHERE nombre = ?", [nombre]);

        if (check.length == 0){
            const [rows] = await pool.query('INSERT INTO Pokemones (nombre, tipo) VALUES (?, ?)', [nombre, tipo]);
            res.send({id: rows.insertId, nombre, tipo});
        }
        else res.status(403).json("El Pokemon ya está en la Pokeapi");

    } catch (error) {
        return res.status(500).json("Error en el servidor, lo sentimos :(");
    }    
}

const putPokemon = async (req,res) => {

    try{
        const nombre_check = req.params.nombre;
        var { nombre, tipo } = req.body;
        const [check] = await pool.query("SELECT * FROM Pokemones WHERE nombre = ?", [nombre_check]);
        const [check_2] = await pool.query("SELECT * FROM Pokemones WHERE nombre = ?", [nombre]);

        if (check.length > 0 && check_2.length == 0){
            await pool.query('UPDATE Pokemones SET nombre = IFNULL(?, nombre), tipo = IFNULL(?, tipo) WHERE nombre = ?', [nombre, tipo, nombre_check]);
            nombre = nombre || check[0].nombre;
            tipo = tipo || check[0].tipo;
            res.send({id: check[0].id, nombre, tipo});
        }
        else if (check.length == 0) res.status(404).json("El Pokemon que quieres actualizar no está en la Pokeapi");
        else res.status(404).json("El Pokemon introducido ya está en la Pokeapi");

    } catch (error) {
        return res.status(500).json("Error en el servidor, lo sentimos :(");
    }    
}

const deletePokemon = async (req,res) => {

    try{
        const nombre = req.params.nombre;
        const [rows] = await pool.query("DELETE FROM Pokemones WHERE nombre = ?", [nombre]);

        if (rows.affectedRows <= 0) res.status(404).json("No se ha encontrado ningún Pokemon con ese nombre")
        else res.json(rows);

    } catch (error) {
        return res.status(500).json("Error en el servidor, lo sentimos :(");
    }    
}

module.exports = {getPokemon, getPokemones, getTipo, putPokemon, deletePokemon, postPokemon};