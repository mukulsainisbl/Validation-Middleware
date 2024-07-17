const express = require("express");

const server = express();
server.use(express.json());


function validateTodoData(req, res, next) {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  if (
    typeof ID === "number" &&
    typeof Name === "string" &&
    typeof Rating === "number" &&
    typeof Description === "string" &&
    typeof Genre === "string" &&
    Array.isArray(Cast)
  ) {
    next(); 
  } else {
    res.status(400).send("Bad request. Some data is incorrect.");
  }
}


server.post("/", validateTodoData, (req, res) => {
  console.log("Received data:", req.body);
  res.status(200).send("Data received");
});

server.listen(8585, () => {
  console.log("Server started on port 8585");
});
