const { Router } = require('express');
const router = Router();
const {getPokemon, getPokemones, getTipo, postPokemon, putPokemon, deletePokemon} = require('./../controllers/pokemon.controller.js');

router.get('/', getPokemones);

router.get('/:nombre', getPokemon);

router.get('/Tipos/:tipo', getTipo);

router.post('/', postPokemon);

router.put('/:nombre', putPokemon);

router.delete('/:nombre', deletePokemon);

module.exports = router;
