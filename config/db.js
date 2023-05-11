const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://mheba509:o2wJXzNs3PlmiYKc@cluster0.21kdvrl.mongodb.net/task",  { useUnifiedTopology: true });
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB