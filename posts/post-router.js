const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
      try {
         // same: SELECT * FROM "posts";
        const posts = await db.select("*").from("posts");
        res.status(200).json(posts);
      } catch(err) {
         next(err);
      }
})

router.get("/:id", async (req, res, next) => {
      try {
         const id = req.params.id;
        //  console.log(id)
         const post = await db.first("*").from("posts").where("id",req.params.id);
        //  console.log('line19',post);
         res.json(post);
      } catch(err) {
         next(err);
      }
})

router.post("/", async (req, res, next) => {
      try {
        const payload = {
          title: req.body.title,
          contents: req.body.contents
        }
        const [id] = await db("posts").insert(payload);
        const newPost  = await db.first("*").from("posts").where("id", id);
        res.status(201).json(newPost);
      } catch(err) {
         next(err);
      }
})

router.put("/:id", async (req, res, next) => {
      try {

      } catch(err) {
         next(err);
      }
})

router.delete("/:id", async (req, res, next) => {
      try {

      } catch(err) {
         next(err);
      }
})

module.exports = router