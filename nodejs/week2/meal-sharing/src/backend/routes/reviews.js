const express = require("express");
const dataReviews = require("../data/reviews.json");

const router = express.Router();

// Respond with the json for all reviews

router.get("/", (req, res) => res.json(dataReviews));

// Respond with the json for the review with the corresponding id

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!isNaN(parseInt(id))) {
    const reviews = dataReviews.find(review => review.id === parseInt(id));

    if (reviews.length === 0) {
      return res
        .status(404)
        .send("Review with the corresponding id is not found");
    }
    return res.send(reviews);
  }

  return res.status(400).send(`Bad request, ${id} is not a number`);
});

module.exports = router;