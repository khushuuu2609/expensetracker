const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1/ExpTracker";

const connectToMongo = () => {
    return new Promise((resolve, reject) => {
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

module.exports = { connectToMongo };