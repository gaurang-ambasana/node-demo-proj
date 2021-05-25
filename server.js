const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
console.log(app);

const publicData = path.resolve(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(publicData));

app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});

app.post("/data", (req, res) => {
  res.send({ status: "data received" });
  console.log(req.body);
});

app.get("/about", (req, res) => {
  res.sendFile("public/about.html");
});

app.listen(5000, () => {
  console.log(`pls check on http://localhost:5000`);
});
