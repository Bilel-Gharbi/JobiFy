const express = require("express");
const loader = require("./loaders");
const { PORT } = require("./config");

const { Sequelize, DataTypes } = require("sequelize");

/* let db = new Sequelize("LazdgcoNiC", "LazdgcoNiC", "5g3pwabbCl", {
  host: "remotemysql.com",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
}); */

//console.log(db);

/// squelize
/* db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  }); */

/* const User = db.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  },
  {
    // Other model options go here
  }
); */

// force: true will drop the table if it already exists
/* User.sync({ force: true }).then(() => {
  // Table created
  return User.create({
    firstName: "John",
    lastName: "Hancock"
  });
}); */
const app = express();
loader(app);

app.listen(PORT, err =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
