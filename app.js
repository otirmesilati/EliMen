const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hi\nYay!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});