require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const eventsRoutes = require("./src/routes/v3");

const PORT = 8082;

const DB_URI = "mongodb://127.0.0.1:27017/eventsdb";
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log(`Connected to database at ${DB_URI} ...`);
  })
  .catch((err) => {
    console.log(
      `Could not connect to database at ${DB_URI} because of ${err.message}`
    );
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Event handling</h1");
});

app.use("/events", eventsRoutes);

app.listen(PORT, () => {
  console.log("Server started on ", PORT);
});

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Hello from Server");

//   const date = new Date().toLocaleDateString();
//   const time = new Date().toLocaleTimeString();
//   console.log(`Server Date-Time: ${date} ${time}`);
// res.write("<h1>Hello</h1>");
// res.end();
// });

// server.listen(8082, () => {
//   console.log("Listening...");
// });
