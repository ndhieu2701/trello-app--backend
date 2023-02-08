const express = require("express");
const app = express();
const morgan = require("morgan");
const compression = require("compression");
require("dotenv").config();
// //app use cors
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

process.env.NODE_ENV = "production";

// Use morgan for logging
app.use(morgan("combined"));

// Enable response compression
app.use(compression());
//connect database
const db = require("./config/db");
db.connect();

const route = require("./api/index");
route(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
