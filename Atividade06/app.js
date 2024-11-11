const express = require('express');
const animeRouter = require("./src/routes/animes_routes");

const app = express();

app.use(express.json());
app.use(animeRouter);

module.exports = app;  