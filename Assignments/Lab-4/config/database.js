const mongoose = require("mongoose");

// I wasted like 2 hours trying to get the process.env to work and eventually had to give up and use the same thing as the pokemon fullstack
function connectToDatabase() {
    //Cloud Database
    mongoose.connect('mongodb+srv://Adam:passw0rd@cluster0.cgdqqxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log('Connected to database');
    }).catch((error) => {
        console.log(error);
    })

}

module.exports = {connectToDatabase};