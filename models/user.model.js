const mongoose = require("mongoose");

// using mongoose to create new module
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required!"],
    },
    email: {
      type: String,
      required: [true, "User Email is required!"],
    },
    password: {
      type: String,
      required: [true, "User Password is required!"],
    },
  },
  { timestamps: true } // addes two more feilds : updated at and created at
);

// allow mongodb to use this module and create User collection in lowerCase :
const User = mongoose.model("User", UserSchema);

// export this:
module.exports = User;
