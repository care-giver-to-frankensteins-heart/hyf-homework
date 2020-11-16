

const express = require("express");
const app = express();

// Routers - Inside the app.js file create routes using express
const mealsApiRouter = require('./routes/meals.js');
const reservationsRouter = require('./routes/reservations.js');
const reviewsRouter = require("./routes/reviews.js");

// make a middleware the logs the the date and the request's method, each time the server gets a request
app.use((req,res, next) => {
    console.log('Date:', new Date().toDateString());
    console.log('Request method:', req.method);
    next();
});

app.use('/meals', mealsApiRouter);
app.use('/reservations', reservationsRouter);
app.use('/reviews', reviewsRouter);


app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
});


module.exports = app;
