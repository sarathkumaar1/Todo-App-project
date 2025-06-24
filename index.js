const express = require("express");
require("dotenv").config();
const dbConnect = require("./db/dbConnection");
const app = express();
const PORT = process.env.PORT
const cors = require("cors");

dbConnect;
app.use(express.json());
app.use(cors());

//require app routes
const appRoutes = require("./routes/index");

app.use("/api/v2", appRoutes);

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
});