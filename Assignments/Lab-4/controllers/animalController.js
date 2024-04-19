const Animal = require("../model/Animal");
const bcrypt = require("bcrypt");


// Used to control the routes for the homepage
function displayHomePage(req, res) {
    // Display the Home Page
    res.render("layouts/main.ejs", { title: "Home" });
}

function displayEntryForm(req, res) {
    // Display the Home Page
    res.render("animals/entry-form.ejs", { title: "Entry Form" });
}

async function getAllAnimals(req, res) {
    try {
      const myCollection = await Animal.find({});
      res.render("animals/all-animals.ejs", { myCollection, title: "Animal list" });
    } catch (err) {
      console.err("Error with getting saved collection");
      res.status(500).send("Error in getting saved collection");
    }
}

async function deleteAnimalById(req, res) {
    try {
      const animalId = req.params.idOfAnimal;
      await Animal.deleteOne({ _id: animalId });
      res.redirect("/AllAnimals");
    } catch (err) {
      console.err("Error with getting saved collection");
      res.status(500).send("Error in getting saved collection");
    }
}

async function displayEditForm(req, res) {
    try {
      const animalId = req.params.idOfAnimal;
      await Animal.findOne({ _id: animalId });
      res.render("/animals/edit-animals.ejs", { title: "Edit Form" });
    } catch (err) {
      console.err("Error with getting saved collection");
      res.status(500).send("Error in getting saved collection");
    }
}

async function AddAnimalToDatabase(req, res) {
    // Grab the form data
    const formData = req.body;
    console.log(formData);
    // Create a new pokemon in our database
    try {
      await Animal.create({
        zoo: formData.zoo,
        scientificName: formData.scientificName,
        commonName: formData.commonName,
        givenName: formData.givenName,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        age: formData.age,
        isTransportable: formData.isTransportable
      });
    } catch (err) {
      console.log(`Error in creating Animal`);
    }
    res.redirect("/"); // redirect user back to slash route upon completion
}


module.exports = {
    displayHomePage,
    displayEntryForm,
    getAllAnimals,
    deleteAnimalById,
    displayEditForm,
    AddAnimalToDatabase
};
  


  