const { Router } = require("express");

const userRouter = Router();

userRouter.post("/createUser", createUser);
userRouter.get("/readUsers", readUsers);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;
