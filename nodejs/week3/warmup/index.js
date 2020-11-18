const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get("/", (req, res) => res.send("nodejs week3 homework"));

// GET /calculator/add?first=<number here>&second=<number here>. In response send sum (first + second).

app.get("/calculator/add", (req, res) => {
  // console.log(req.query)
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) + Number(second);
      res.send(`The result is ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = Number(first);
        second.forEach((number) => (result = result + Number(number)));
        res.send(` The result is: ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `You should enter two parameters for example /calculator/add?first=5&second=2`
    );
});

app.get("/calculator/subtract", (req, res) => {
  //console.log(req.query);
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const difference = Number(first) - Number(second);
      res.send(`The result is ${difference}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = Number(first);
        second.forEach((number) => (result = result - Number(number)));
        res.send(` The result is: ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `You should enter two parameters for example /calculator/subtract?first=5&second=2`
    );
});

app.get("/calculator/multiply", (req, res) => {
  //console.log(req.query);
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) * Number(second);
      res.send(`The result is ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = first;
        second.forEach((number) => (result = result * number));
        res.send(` The result is: ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `You should enter two parameters for example /calculator/multiply?first=5&second=2`
    );
});

app.get("/calculator/divide", (req, res) => {
  // console.log(req.query);
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) / Number(second);
      res.send(`The result is ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = Number(first);
        second.forEach((number) => (result = result / Number(number)));
        res.send(` The result is: ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `You should enter two parameters for example /calculator/divide?first=5&second=2`
    );
});

app.post("/calculator/multiply", (req, res) => {
  //console.log(req.body);
  const { first, second } = req.body;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) * Number(second);
      res.send(`The result is ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = first;
        second.forEach((number) => (result = result * number));
        res.send(` The result is: ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `You should enter two parameters for example /calculator/multiply?first=5&second=2`
    );
});

app.post("/calculator/divide", (req, res) => {
  //console.log(req.body);
  const { first, second } = req.body;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) / Number(second);
      res.send(`The result is ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = first;
        second.forEach((number) => (result = result / number));
        res.send(` The result is: ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `You should enter two parameters for example /calculator/divide?first=5&second=2`
    );
});

app.listen(port, console.log(`Calculator:listening on port ${port}`));
