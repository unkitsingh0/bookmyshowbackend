// Importing schema model for database operations.
const { connection } = require("../connections/connector");

// Defining the 'handelCreateNewBooking' controller function
const handelCreateNewBooking = async (req, res) => {
  // Handling Error using try catch
  try {
    // Using object destructuring to destructur req.body
    let { movie, slot, seats } = req.body;
    // Using object destructuring to destructur seasts object
    let { A1, A2, A3, A4, D1, D2 } = seats;
    // If movie response is not found then status code 400 with error message will be sent
    if (!movie) return res.status(400).send("Select Movie");
    // If time-slot response is not found then status code 400 with error message will be sent
    if (!slot) return res.status(400).send("Select Slot");
    // If seats response is not found then status code 400 with error message will be sent
    if (A1 == 0 && A2 == 0 && A3 == 0 && A4 == 0 && D1 == 0 && D2 == 0)
      return res.status(400).send("Selecet atleast one seat");

    // If the booking is successful, respond with a 200 status and the booking details in JSON format.
    let newMovieBooking = await connection.create({
      movie,
      slot,
      seats,
    });
    res.status(200).json(newMovieBooking);
  } catch (error) {
    // Error message
    console.log(error.message);
    // For internal server error send 500 status code and error message
    res.status(500).json({ status: "faild", message: "something went wrong" });
  }
};

// Defining the 'handelLastBookingDetails' controller function
const handelLastBookingDetails = async (req, res) => {
  // Handling Error using try catch
  try {
    // Query to find last movie ticket booking
    let lastBooking = await connection.findOne({}, {}, { sort: { _id: -1 } });
    // If there is zero booking in database then no previous booking response will be send
    if (!lastBooking) return res.send({ message: "no previous booking found" });

    // If there is booking in database then last booking details response will be send
    res.status(200).json(lastBooking);
  } catch (error) {
    // Error message
    console.log(error.message);
    // For internal server error send 500 status code and error message
    res.status(500).json({ status: "faild", message: "something went wrong" });
  }
};
// Exporting 'handelCreateNewBooking,handelLastBookingDetails' function to used by routes
module.exports = { handelCreateNewBooking, handelLastBookingDetails };
