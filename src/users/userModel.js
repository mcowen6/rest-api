const mongoose = require("mongoose");
const { Types } = require("mongoose");
// const { Hobbies } = require("../hobbies/hobbyModel");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  /*hobbies: [{ type: Types.ObjectId, ref: "Hobbies" }],*/
});

const Users2 = mongoose.model("Users2", userSchema);
module.exports = Users2;
