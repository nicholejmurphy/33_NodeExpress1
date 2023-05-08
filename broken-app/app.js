const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const getResults = require("./helpers");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    const results = getResults(req.body.developers);
    Promise.all(results).then((results) => {
      return res.send(results);
    });
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log("Starting server on port 3000");
});
