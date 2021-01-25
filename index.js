const express = require("express");

const db = require("./config/mongoose");
const passportJWT = require("./config/passport-jwt-strategy");
const port = 8000;
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use("/", require("./route"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server : ${err}`);
    return;
  }
  console.log(`server is running at port number : ${port}`);
});
