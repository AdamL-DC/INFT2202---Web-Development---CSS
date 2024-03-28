const express = require('express');
const pokemonRouter = require('./routes/pokemon');

const app = express();

app.set("views", "./views"); // Create views folder

app.set("view engine", "ejs");

app.get("/hello", (req, res) => res.send("Hello World!"));

// We are instructin our applicaiton to look into the routes folder and into the pokemon.js file inside that folder to manage any routes that begin with the path "/"
app.use("/", pokemonRouter);

app.listen(3500, () => {
console.log(" Express server listening on port 3500");
});




