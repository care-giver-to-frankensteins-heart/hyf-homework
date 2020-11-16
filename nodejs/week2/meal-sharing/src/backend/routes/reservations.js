const express = require("express");
const dataReservations = require("../data/reservations.json");

const router = express.Router();

// Respond with the json for all reservations

router.get("/", (req, res) => res.json(dataReservations));

// Respond with the json for the reservation with the corresponding id

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!isNaN(parseInt(id))) {
    const reservations = dataReservations.find(
      reservation => reservation.id === parseInt(id)
    );

    if (reservations.length === 0) {
      return res
        .status(404)
        .send("Reservation with the corresponding id is not found");
    }
    return res.send(reservations);
  }

  return res.status(400).send(`Bad request, ${id} is not a number`);
});

module.exports = router;