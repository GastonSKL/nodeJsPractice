const express = require("express");
const bookRouter = express.Router();

bookRouter
  .route("/book")
  .get((req, res) => {
    res.send("All books");
  })
  .post((req, res) => {
    res.json({ data: "Book stored" });
  });

bookRouter.get("/book/:id", (req, res) => {
  console.log(req.params);
  res.send("Single book");
});

module.exports = bookRouter;