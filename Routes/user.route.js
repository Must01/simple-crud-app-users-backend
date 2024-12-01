const express = require("express");
const UserMode = require("../models/user.model.js");
const router = express.Router();

// controllers :
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller.js");

// router to create a user
router.post("/", createUser);

// router to get the data of all the users from the db or the api
router.get("/", getUsers);

// router to get a user by the id
router.get("/:id", getUser);

// router to update a user by the id
router.put("/:id", updateUser);

// router to delete a user by the id
router.delete("/:id", deleteUser);

module.exports = router;
