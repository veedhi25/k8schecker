const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Service2 API is working!");
});

app.listen(8035, () => console.log("Service3 running on port 8035"));
