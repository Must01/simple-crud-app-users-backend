const express = require("express");
const mongoose = require("mongoose"); // import mongoose
const app = express();
const userRoute = require("./Routes/user.route.js");

// Middleware to parse JSON
app.use(express.json());

// Api Routes
app.use("/api/users", userRoute);

// Connect to DB and run the server on port 3000
mongoose
  .connect(
    "mongodb+srv://mustaphabouddahr347:HDzdEn6wLpBgYawD@backenddb.0e8nr.mongodb.net/?retryWrites=true&w=majority&appName=backendDB"
  )
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
