const mongoose = require("mongoose");

const hobbySchema = new mongoose.Schema({
  hobby: {
    name: String,
    required: true,
  },
  // possible boolean for is team sport
});

const Hobbies = mongoose.model("Hobbies", hobbySchema);
module.exports = Hobbies;
