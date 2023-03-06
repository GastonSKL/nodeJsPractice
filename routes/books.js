const express = require("express");
const bookRouter = express.Router();
const connect = require("./../database/db");

bookRouter
  .route("/book")
  .get(async (req, res) => {
    const db = await connect();
    const books = await db.collection("book").find().toArray();
    res.send("All books");
  })
  .post(async (req, res) => {
    const db = await connect();
    db.collection("book").insertOne(req.body);
    res.json({ data: "Book stored" });
  });

bookRouter
  .route("/:id")
  .get(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    db.collection("book").find({ _id }).res.json(book);
  })
  .patch(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    const book = await db
      .collection("book")
      .updateOne({ _id }, { $set: req.body });
    res.send("Single book to update");
  })
  .delete(async(req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    const book = await db
      .collection("book")
      .deleteOne({_id})
    res.send("Single book to delete");
  });

module.exports = bookRouter;
