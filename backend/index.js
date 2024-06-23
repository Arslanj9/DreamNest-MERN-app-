const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
require('dotenv').config()
const cors = require("cors");
const mongoDBConnection = require('./dbConn')
const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)


// Making connection with MONGODB
mongoDBConnection(process.env.MONGO_URI)


/* MONGOOSE SETUP */
const PORT = 3001;

app.listen(PORT, () => console.log(`App listening on : ${PORT}`));