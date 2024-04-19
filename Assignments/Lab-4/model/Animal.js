const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    // mongoDB adds its own Unique ID to each record
    zoo: {type: String, required: true},
    scientificName: {type: String, required: true},
    commonName: {type: String, required: true},
    givenName: {type: String, required: true},
    gender: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    age: {type: Number, required: true},
    isTransportable: {type: Boolean, required: true}
});


const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;