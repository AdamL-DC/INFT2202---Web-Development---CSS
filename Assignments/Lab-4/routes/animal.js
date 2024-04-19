const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

//router to home page at "/"
router.get("/", animalController.displayHomePage);

//router to entry form
router.get("/entry-form", animalController.displayEntryForm);

//router to all animals
router.get("/all-animals", animalController.getAllAnimals);

//router to edit form
router.get("/edit-animal/:idOfAnimal", animalController.displayEditForm);

//router to delete
router.post("/deleteAnimal/:idOfAnimal", animalController.deleteAnimalById);

router.post("/addAnimal", animalController.AddAnimalToDatabase);

//export the router
module.exports = router;
