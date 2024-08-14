const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers.cookie);
  res.send("Helllo there---from the root(/) route");
});

app.listen(5050);
