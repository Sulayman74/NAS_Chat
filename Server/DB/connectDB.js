const mongoose = require("mongoose");

// const connectDB = async url => {
//     try{
//         return await mongoose.connect(url);
//         console.log("Database connected")
//     }catch(err){
//         console.error(err);
//     }
// };

const connectDB = url => {
  return mongoose
    .connect(url)
    .then(console.log("Database connected"))
    .catch(err => console.error(err));
};

module.exports = connectDB;
