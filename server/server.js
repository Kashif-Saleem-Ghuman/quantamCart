import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();
import { readdirSync } from "fs";
import mongoose from "mongoose";

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

//route

// Using the node fs module, we can read all the files in the routes folder and then use the map method to require each file.

readdirSync("./routes").map((r) => {
  //apply as middelware now
  app.use("/api", require(`./routes/${r}`));
});

// port

const port = process.env.PORT || 8000;

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("**DB connected**"))
  .catch((err) => console.log("DB Error => ", err));
