const UserModel = require("../models/user.model.js");

// function to get all the users
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function to get user
const getUser = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const { id } = req.params;
    // Find the user in the database using the extracted ID
    const userid = await UserModel.findById(id);
    // If the user is found, send it as a JSON response with a 200 OK status code
    res.status(200).json(userid);
  } catch (error) {
    // If an error occurs during the process, send an error message with a 500 Internal Server Error status code
    res.status(500).json({ message: error.message });
  }
};

// function to create user
const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body); // get the data from the body
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function to update user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body); //update the id with what the data in the req.body

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const updatedUser = await UserModel.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function to delete user
const deleteUser = async (req, res) => {
  try {
    // Extract user ID from the route parameters
    const { id } = req.params;

    // Attempt to find and delete the user by ID
    const userDeleted = await UserModel.findByIdAndDelete(id);

    // If no user is found, return a 404 status with a message
    if (!userDeleted) {
      return res.status(404).json({ message: "User not found" });
    }

    // Success response
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    // Handle any server-side errors
    res.status(500).json({ message: error.message });
  }
};

// export all the functions :
module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
