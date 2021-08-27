const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");

//routes
app.use("/", apiRouter);

//server
app.listen(port, function () {
  console.log("server is listening on http://localhost:" + port);
});
