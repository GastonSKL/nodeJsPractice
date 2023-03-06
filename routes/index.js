const express = require("express");
const path = require("path");
const bookRoutes = require("./books");
const router = express.Router();
router.use(bookRoutes);

router.get("/", (req, res) => {
  res.render("index",{name:"Gaston"});
});

router.all("/*", (req, res) => {
  res.send("Page not found");
});

module.exports = router;
