require("./db/connection");

const express = require("express");
const hobbyRouter = require("./hobbies/hobbyRoutes");
const userRouter = require("./users/userRoutes");

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(userRouter);
app.use(hobbyRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
