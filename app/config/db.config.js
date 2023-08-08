const mongoose = require("mongoose");

const connectDB = () => mongoose
    .connect("mongodb+srv://sankalpa:*sankalpa2000>.@sankalpa.sptvnku.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("💻 Mondodb Connected"))
    .catch(err => console.error(err));

module.exports = connectDB;


