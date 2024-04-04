// we are initializing a router object from express router
const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon');

// app.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/hello-pokemon", pokemonController.greetPokemon);

// Share the router with others
module.exports = router;

// ES6 Syntax
// export router