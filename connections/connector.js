const mongodb = require("mongodb");
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;

let mongoose = require("mongoose");
const { bookMovieSchema } = require("../model/schema");

//Establishing a connection with MongoDB.
// Connecting to database using mongoose .
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // If connection is successful .Then connection established with mongodb server online message will be displayed
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    // If there is error while connecting to MONGODB .error while connection with err message will be displayed
    console.log("error while connection", err);
  });
// Creating model with name bookmovietickets
let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema);

exports.connection = collection_connection;
