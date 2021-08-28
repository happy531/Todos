const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
// const bodyParser = require("body-parser");

//db
require("./db/mongoose");

//parsers
//Content-type: application/json
app.use(express.json());

//routes
app.use("/api", apiRouter);

//server
app.listen(port, function () {
  console.log("server is listening on http://localhost:" + port);
});