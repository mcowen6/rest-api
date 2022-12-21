const { Router } = require("express");
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("./userController");
const { hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/createUser", hashPass, createUser);
userRouter.post("/login", loginUser);
userRouter.get("/readUsers", readUsers);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;
