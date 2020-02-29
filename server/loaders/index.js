const expressLoader = require("./express");

module.exports = async app => {
  try {
    await expressLoader(app);
    console.log("Experss App Intialized");
  } catch (err) {
    console.log(err);
  }
};
