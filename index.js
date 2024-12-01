const express = require("express");
const mongoose = require("mongoose"); // import mongoose
const app = express();
const userRoute = require("./Routes/user.route.js");
require("dotenv").config();

// Middleware to parse JSON
app.use(express.json());

// Api Routes
app.use("/api/users", userRoute);

// Connect to DB and run the server on port 3000
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // database connected successfully
    console.log("Connected!");
    // server running on port 3000
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

// Shows in the server
app.get("/", (req, res) => {
  res.send("Hello from Node Api Mustapha Bouddahr Updated"); // throw a response from the server on the port "/"
});
