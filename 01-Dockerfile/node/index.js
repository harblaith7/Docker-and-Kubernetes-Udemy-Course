const express = require("express");

const app = express();

const post = 3000;

app.get("/", (req, res) => {
  res.send("Goodbye World!");
});

app.listen(post, () => {
  console.log("Now running on PORT " + post);
});
