const express = require("express");
const routes = require("./routes/index");
const EventEmitter = require("events");

const app = express();
app.use(routes);

const myEvent = new EventEmitter();

myEvent.on("test-event", (data) => {
  console.log("this event is listening");
  console.log(data.name);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
