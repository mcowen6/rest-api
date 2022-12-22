const Hobbies = require("./hobbyModel");

exports.createHobby = async (req, res) => {
  try {
    const newHobby = await Hobbies.create(req.body);
    console.log(newHobby);
    res.status(201).send({ success: "New hobby has been added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.readHobbies = async (req, res) => {
  try {
    const hobbies = await Hobbies.find({});
    res.status(200).send({ hobbies: hobbies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateHobby = async (req, res) => {
  try {
    const updateHobby = await Hobbies.updateOne(
      { hobby: req.body.hobby },
      { [req.body.key]: req.body.value }
    );
    console.log(updateHobby);
    res.status(200).send({ update: "Hobby bas been updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteHobby = async (req, res) => {
  try {
    const deleteHobby = await Hobbies.deleteOne({ hobby: req.body.hobby });
    console.log(deleteHobby);
    res.status(200).send({ delete: "Hobby has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
