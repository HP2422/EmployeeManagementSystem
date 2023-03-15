const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const con = mongoose.connect("mongodb+srv://admin:admin@cluster0.oz6xckg.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
        console.log('MongoDb Database is Connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = { connectDB };