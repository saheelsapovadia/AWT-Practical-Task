const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const PORT = process.env.PORT || 4000;
// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});
