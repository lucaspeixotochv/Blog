const express = require("express");
const {
  addArticles,
  getArticles,
  deleteArticle,
} = require("../controllers/controller");

const router = express.Router();

router.get("/", getArticles);

router.post("/", addArticles);

router.delete("/:id", deleteArticle);

module.exports = router;
