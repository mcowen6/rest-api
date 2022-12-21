const Users2 = require("./userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  console.log(req);
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
