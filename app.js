const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const post_routes = require('./routes/post_routes');

app.use('/post',post_routes);

const PORT = process.env.PORT;

app.get("/test", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
