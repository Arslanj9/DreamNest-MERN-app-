const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require("cors");
const mongoDBConnection = require('./dbConn')
const authRoutes = require("./routes/auth.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)


// Making connection with MONGODB
mongoDBConnection(process.env.MONGO_URI)


/* MONGOOSE SETUP */
const PORT = 3001;

app.listen(PORT, () => console.log(`App listening on : ${PORT}`));