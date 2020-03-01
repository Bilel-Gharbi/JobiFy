const express = require("express");
const loader = require("./loaders");
const { PORT } = require("./config");
const app = express();

const { userOperation } = require("./operations");

loader(app);

app.listen(PORT, err =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
