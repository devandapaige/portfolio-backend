//dependencies to help the backend:
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
//routers:
const projectRouter = require("./routers/projectRouter");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/projects", projectRouter);

server.get("/", async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Welcome to the backend - Things seem to be working so far.",
    });
  } catch (err) {
    next(err);
  }
});
//Catch all for 500 server errors:
server.use((err, req, res, next) => {
  console.log(`500 Error: ${err}`);
  res.status(500).json({
    message: "Oops! Something went wrong!",
  });
});

module.exports = server;
