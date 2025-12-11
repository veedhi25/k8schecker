const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Service4 API is working!");
});

app.listen(8089, () => console.log("Service3 running on port 8089"));
