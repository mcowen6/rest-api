const { Router } = require("express");
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("./userController");
const {
  hashPass,
  comparePass,
  tokenCheck,
  validate,
} = require("../middleware");

const userRouter = Router();

userRouter.post("/createUser", validate, hashPass, createUser);
userRouter.post("/login", comparePass, loginUser);
userRouter.get("/readUsers", tokenCheck, readUsers);
userRouter.put("/updateUser", tokenCheck, updateUser);
userRouter.delete("/deleteUser", tokenCheck, deleteUser);

module.exports = userRouter;
