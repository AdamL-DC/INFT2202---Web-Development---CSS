// Set up and connect to our database

const mongoose = require("mongoose");


function connectToDatabase() {
    //Cloud Database
    mongoose.connect('mongodb+srv://Adam:passw0rd@cluster0.cgdqqxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
        console.log('Connected to database');
    }).catch((error) => {
        console.log(error);
    })

}

module.exports = {connectToDatabase};

//local Database
//mongoose.connect('mongodb://127.0.0.1:27017/pokemon', () => {
//    console.log('Connected to database');
//});