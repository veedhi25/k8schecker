const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Service2 API is working!");
});

app.listen(8080, () => console.log("Service2 running on port 8080"));
