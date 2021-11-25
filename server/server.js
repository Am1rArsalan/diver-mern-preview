const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const config = require("./config/");
const path = require("path");

class App {
  constructor() {
    this.app = express();
    this.setExpress();
    this.setMongo();
    this.setConfig();
    this.setRoutes();
    this.setReactClient();
  }

  setExpress = () => {
    this.app.listen(config.port, (err) => {
      if (err) console.log("Error in setting express " + err);
      console.log(`Server running on port http://localhost:${config.port}`);
    });
  };

  setMongo = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongourl, (err) => {
      if (err) console.log("Error in connection to the database");
      else {
        console.log("connected to db");
      }
    });
    require("./models/user");
    require("./models/transAction");
  };

  setConfig = () => {
    this.app.use(cors());
    this.app.use(express.static("public"));

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    require("./passport/passport");
    require("./passport/passport-jwt");

    this.app.use(passport.initialize());
    this.app.use(passport.session());
  };

  setRoutes = () => {
    this.app.use("/api", require("./routes/index.js"));
  };

  setReactClient() {
    this.app.use(express.static(path.join(__dirname, "/../client/build")));
    this.app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    });
  }
}

module.exports = App;
