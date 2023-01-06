require("./db/connection");

const express = require("express");
// const hobbyRouter = require("./hobbies/hobbyRoutes");
const userRouter = require("./users/userRoutes");
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(userRouter);
// app.use(hobbyRouter);
app.get("/health", (req, res) => {
  res.status(200).send({ message: "API is working " });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
