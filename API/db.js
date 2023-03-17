const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        const url = process.env.DB_URL || 'mongodb+srv://admin:admin@cluster0.oz6xckg.mongodb.net/?retryWrites=true&w=majority';
        const con = mongoose.connect(url, { useNewUrlParser: true });
        console.log('MongoDb Database is Connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = { connectDB };