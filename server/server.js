const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const fozzieRouter = require("./routes/fozzie.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

/** ---------- ROUTES ---------- **/
app.use("/bear", fozzieRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
	console.log("Listening on port: ", port);
});
