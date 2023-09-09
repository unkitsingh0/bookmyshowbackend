const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "BookMyShow",
    version: "1.0.0",
    description:
      "This project is part of Almabetter Capstone project and aims to provide an API for creating new movie booking and retrieve last booking movie data.",
  },
  servers: [
    {
      url: "http://localhost:8080",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions, including JSDoc comments.
  apis: ["./routes/movieBookingRoute.js"], // Update the path according to your project structure.
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
