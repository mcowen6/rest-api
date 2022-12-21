const Users2 = require("./userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  //   console.log(req);
  try {
    const newUser = await Users2.create(req.body);
    console.log(newUser);
    res.status(201).send({ success: "New user has been created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.readUsers = async (req, res) => {
  try {
    const users = await Users2.find({});
    res.status(200).send({ users: users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateUser = await Users2.updateOne(
      {
        username: req.body.username,
      },
      { [req.body.key]: req.body.value }
    );
    console.log(updateUser);
    res.status(200).send({ update: "User has been updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await Users2.deleteOne({ username: req.body.username });
    console.log(deleteUser);
    res.status(200).send({ delete: "User has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await Users2.findOne({ username: req.body.username });
    const token = await jwt.sign({ _id: user._id }, process.env.SECRET);
    console.log(user, "found in database");
    console.log("token:", token);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
