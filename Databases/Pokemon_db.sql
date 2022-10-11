CREATE DATABASE IF NOT EXISTS Pokemon_db;
USE Pokemon_db;
CREATE TABLE Pokemones(
	id INT NOT NULL auto_increment,
    nombre VARCHAR(45) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    primary key(id)
);

DESCRIBE Pokemones;

INSERT INTO Pokemones VALUES 
    (1, 'Bulbasaur', 'Planta'),
    (2, 'Charmander', 'Fuego'),
    (3, 'Squirtle', 'Agua'),
    (4, 'Pikachu', 'Electrico');
    
