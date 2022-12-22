const mongoose = require("mongoose");
const { Users2 } = require("../users/userModel");
const { Types } = require("mongoose");

const hobbySchema = new mongoose.Schema({
  hobby: {
    type: String,
    required: true,
  },
  users: [{ type: Types.ObjectId, ref: "Users2" }],
  // possible boolean for is team sport
});

const Hobbies = mongoose.model("Hobbies", hobbySchema);
module.exports = Hobbies;
