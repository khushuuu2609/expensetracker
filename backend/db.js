const mongoose = require('mongoose'); //mongoose for connecting the mongoDB
const mongoURI = "mongodb://127.0.0.1/ExpTracker"; //mongodb connection String

//function for the database connection setup
const connectToMongo = () => {
    return new Promise((resolve, reject) => {
        //connecting the database
        mongoose.connect(mongoURI, { useNewUrlParser: true });

        var conn = mongoose.connection;
        conn.on('connected', () => {
            console.log('database is connected successfully');
        });
        conn.on('disconnected', () => {
            console.log('database is disconnected successfully');
        });
        conn.on('error', (err) => {
            console.error('connection error:', err);
            reject(err);
        });
    });
};
//Exporting the connectToMongo function to use in index.js
module.exports = { connectToMongo };