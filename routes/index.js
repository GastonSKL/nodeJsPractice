const express = require("express");
const bookRoutes = require("./books");
const router = express.Router();
router.use(bookRoutes);

router.get("/", (req, res) => {
  myEvent.emit("test-event", { name: "Carlos" });
  res.send("Hello World!");
});

router.all("/*", (req, res) => {
  res.send("Page not found");
});

module.exports = router;
