const mongoose = require("mongoose");

const connectDB =  () => { 
    try {
        return mongoose.createConnection(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        });
    } catch(err) {
        console.log(`Error Opening databse connection`);
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;