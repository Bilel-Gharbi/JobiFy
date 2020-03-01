//import User model from models/index.js file
const { User } = require("../models");

// User service file includes functon thant interact with directly with the database
// After create a service export using the es6 synt

const createUser = (name, surname) => {
  // force: true will drop the table if it already exists
  User.sync({ force: true }).then(() => {
    // Table created
    return User.create({
      firstName: name,
      lastName: surname
    });
  });
};

const getAllUser = async () => {
  let result = await User.findAll();
  return result;
};

module.exports = {
  createUser,
  getAllUser
};
