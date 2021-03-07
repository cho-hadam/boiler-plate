// get express
const express = require("express");
// new express app
const app = express();
// back server port
const port = 5000;

const bodyParser = require("body-parser");

const config = require("./config/key");

// User model
const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

// MongoDB Connect
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Conneted!"))
  .catch((err) => console.log(err));

// root directory -> print Hello World
app.get("/", (req, res) => res.send("Hello World!"));

// get data from client and insert to database
app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });

    return res.status(200).json({
      success: true,
    });
  });
});

// run -> print console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
