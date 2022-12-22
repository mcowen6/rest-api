const { Router } = require("express");

const {
  createHobby,
  readHobbies,
  updateHobby,
  deleteHobby,
} = require("./hobbyController");
const { tokenCheck } = require("../middleware");

const hobbyRouter = Router();

//*create
hobbyRouter.post("/createHobby", createHobby);
//*read
hobbyRouter.get("/readHobbies", tokenCheck, readHobbies);
//*update
hobbyRouter.put("/updateHobby", tokenCheck, updateHobby);
//*delete
hobbyRouter.delete("/deleteHobby", tokenCheck, deleteHobby);

module.exports = hobbyRouter;
