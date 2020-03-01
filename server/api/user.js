const route = require("express").Router();
const { userOperation } = require("../operations");

route.post("/user", async (req, res) => {
  console.log(req.body);
  try {
    newUser = await userOperation.createNewUser(req.body);
    console.log(newUser);
    res.status(201).json({ msg: "new user created .... ", newUser });
  } catch (err) {
    res.status(400).json(err);
  }
});

route.get("/user", async (req, res) => {
  try {
    users = await userOperation.getAllUser();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = route;
