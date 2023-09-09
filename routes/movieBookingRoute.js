const express = require("express");
// Imorting controllers
const {
  handelCreateNewBooking,
  handelLastBookingDetails,
} = require("../controller/movieBookingController");

//Creating a new router instance using the 'express.Router()' method.
const router = express.Router();

// Define a routes for handling requests to book a movie or getting last booked movie data.
// When POST request is made to '/booking',it will be handeld by handelCreateNewBooking
// When GET request is made to '/booking',it will be handeld by handelLastBookingDetails

// API documentation made using swagger
// POST API for booking movie ticket documentation---Starts here
/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Create a new movie booking
 *     description: Create a new movie booking with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               movie:
 *                 type: string
 *                 description: The name of the movie.
 *               slot:
 *                 type: string
 *                 description: The time slot for the movie.
 *               seats:
 *                 type: object
 *                 properties:
 *                   A1:
 *                     type: number
 *                     description: The number of seats in A1.
 *                   A2:
 *                     type: number
 *                     description: The number of seats in A2.
 *                   A3:
 *                     type: number
 *                     description: The number of seats in A3.
 *                   A4:
 *                     type: number
 *                     description: The number of seats in A4.
 *                   D1:
 *                     type: number
 *                     description: The number of seats in D1.
 *                   D2:
 *                     type: number
 *                     description: The number of seats in D2.
 *                 example:
 *                   A1: 2
 *                   A2: 3
 *                   A3: 1
 *                   A4: 0
 *                   D1: 4
 *                   D2: 2
 *     responses:
 *       200:
 *         description: Successfully created a new movie booking.
 *       400:
 *         description: Movie slot or seats data not provided by the user.
 *       500:
 *         description: Internal server error send 500 status code and error message.
 */
router.post("/booking", handelCreateNewBooking); //handelCreateNewBooking controller will create new movie booking

// GET API for getting last booking details of movie documentation---Starts here
/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Get a last booking details of movie ticket.
 *     description: Retrieve a last booking details of movie ticket booked by the user from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved the last booking movie from database.
 *       500:
 *         description: Internal server error send 500 status code and error message.
 */
router.get("/booking", handelLastBookingDetails); //handelLastBookingDetails controller will return last booking details

// Exporting router to use in index.js
module.exports = router;
