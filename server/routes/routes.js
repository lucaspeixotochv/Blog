const express = require("express");
const { addArticles, getArticles } = require("../controllers/controller");

const router = express.Router();

router.get("/", getArticles);

router.post("/", addArticles);

module.exports = router;
