

function greetPokemon(req, res){
    // Sample Data logic
    // Fetch pokemon from database
    const pokemon = {
        name: "Pikachu",
        skills: "Thunderbolt",
        type: "Electric",
    };
    res.render("greetPokemon.ejs", { pokemonDetails: pokemon});
}


module.exports = {
    greetPokemon
};