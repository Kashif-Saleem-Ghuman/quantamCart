import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();
import { readdirSync } from "fs";

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

readdirSync("./routes").map((r) =>
  app.use("/api/v1", require(`./routes/${r}`))
);

// port

const port = process.env.PORT || 8000;

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
