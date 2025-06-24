const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = mongoose.connect(process.env.DB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB is connected!"))
.catch((err) => console.log(err));  

module.exports = dbConnect;