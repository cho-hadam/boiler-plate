// get express
const express = require("express");
// new express app
const app = express();
// back server port
const port = 5000;

// MongoDB Connect
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://chohadam:s2019w16@boiler-plate.fbqvi.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Conneted!"))
  .catch((err) => console.log(err));

// root directory -> print Hello World
app.get("/", (req, res) => res.send("Hello World!"));

// run -> print console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
