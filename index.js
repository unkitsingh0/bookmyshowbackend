const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const movieBookinRoute = require("./routes/movieBookingRoute");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Import your Swagger definition

// Creating instance of express() as app
const app = express();

//Defining Middlewares

// Middleware for parsing URL-encoded form data from POST requests.
// When extended is set to false, the querystring library is used.
// This is suitable for simple form submissions.
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware for parsing JSON data in the request body.
app.use(bodyParser.json());

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins.
app.use(cors());

// Defining Routes
// movieBookingRoute
app.use("/api", movieBookinRoute);

// Serve Swagger documentation using Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Defining port for the server to listen on the port number
const port = process.env.PORT || 8080;

// Start the Express.js server and listen for incoming HTTP requests on the specified port.
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
