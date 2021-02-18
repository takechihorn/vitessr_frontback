const express = require("express");
const bodyParser = require("body-parser");
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/test", function (req, res) {
  res.send({
    message: "Hello world!",
  });
});

app.listen(process.env.PORT || 3000);
