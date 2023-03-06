const express = require("express");
const routes = require("./routes/index");
const EventEmitter = require("events");
var bodyParser = require('body-parser')

const app = express();
app.set("view engine", "pug");
app.use(routes);
app.use(bodyParser.json())

const myEvent = new EventEmitter();

myEvent.on("test-event", (data) => {
  console.log("this event is listening");
  console.log(data.name);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
