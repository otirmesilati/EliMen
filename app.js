const express = require("express");
const app = express();

const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
