import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();

// apply middelewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("My middelewares");
  next();
});

// routes

app.get("/api", (req, res) => {
  res.json({
    data: "Hey you hit backend",
  });
});

// port

const port = process.env.PORT || 8000;

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
