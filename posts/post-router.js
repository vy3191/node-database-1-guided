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
         console.log(id)
         const post = await db.select("*").from("posts").where("id",req.params.id).limit(1);
         console.log('line19',post);
         res.json(post);
      } catch(err) {
         next(err);
      }
})

router.post("/", async (req, res, next) => {
      try {

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