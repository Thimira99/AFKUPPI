const mongoose = require("mongoose");

const dbConnect = () => {
    const URL = 'mongodb://localhost:27017/BritishLibrary';

    mongoose.connect(URL, () => {
        console.log("Database connected");
    });
};

module.exports = { dbConnect };
