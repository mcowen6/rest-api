const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users2 = require("../users/userModel");

exports.hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.comparePass;
