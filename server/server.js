const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const config = require("./config/");

// App Class
class App {
  constructor() {
    this.app = express();
    //server setUp
    this.setExpress();
    // database config
    this.setMongo();
    //configuration
    this.setConfig();
    //Routers
    this.setRoutes();

    // react application
    //this.setReactClient();
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
    require("./models/user") ;
    require("./models/transAction") ;

  };

  setConfig = () => {
    // browsers does not let us to connect to another local host
    this.app.use(cors());
    // set the static routes
    this.app.use(express.static("public"));

   // config body parser
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    // implement passport starategies
    require("./passport/passport");
    require("./passport/passport-jwt");

    // passposrt
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  };

  setRoutes = () => {
    this.app.use("/api", require("./routes/index.js"));
  };

  // react applications ui !!
  //setReactClient() {
      //this.app.use(express.static(path.join(__dirname, "client/build")));
      //this.app.get("*", (req, res) => {
      //res.sendFile(path.join(__dirname + "/client/build/index.html"));
  //});
  //}
}

module.exports = App;
