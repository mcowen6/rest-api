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

exports.comparePass = async (req, res, next) => {
  try {
    req.user = await Users2.findOne({ username: req.body.username });
    console.log("user found:", req.user);
    console.log(
      "plain text password:",
      req.body.password,
      "hashed password:",
      req.user.password
    );
    if (
      req.user &&
      (await bcrypt.compare(req.body.password, req.user.password))
    ) {
      console.log(
        "username exists and plain text password matches hashed password"
      );
      next();
    } else {
      throw new Error("incorrect username or password");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.tokenCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    console.log("token from the header of the request:", token);
    const decodedToken = await jwt.verify(token, process.env.SECRET);
    console.log("decoded token:", decodedToken);
    console.log("decoded token id:", decodedToken._id);
    const user = await Users2.findById(decodedToken._id);
    console.log("user found by id:", user);
    if (user) {
      next();
    } else {
      throw new Error("User not authorized");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.validate = async (req, res, next) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (username.length < 3) {
      throw new Error(
        "username does not meet the minimum length requirement of 3"
      );
    } else if (!email.includes("@") || !email.includes(".com")) {
      throw new Error("invalid email address");
    } else if (password.length < 6) {
      throw new Error("Password does not meet requirements");
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
