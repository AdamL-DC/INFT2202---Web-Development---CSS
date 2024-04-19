/** Name: Adam Lamoureux
 *  Student ID: 100903015
 *  Date: 2024-04-18
*/


const express = require("express");
const animalRouter = require("./routes/animal");
const DBconfig = require("./config/database");


const app = express();

DBconfig.connectToDatabase();

app.set("views", "./views"); // Create the views folder

app.set("view engine", "ejs");

app.use("/", animalRouter);



app.listen(3500, () => {
  console.log("Express server listening on port 3500...");
});