const { db } = require("../db");

const getArticles = (_, res) => {
  const q = "SELECT * FROM articles";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

const addArticles = (req, res) => {
  const q =
    "INSERT INTO articles(`id`, `backgroundImg`, `category`, `title`, `description`, `userImg`, `userName`, `userArea`) VALUES(?)";

  const values = [
    req.body.id,
    req.body.backgroundImg,
    req.body.category,
    req.body.title,
    req.body.description,
    req.body.userImg,
    req.body.userName,
    req.body.userArea,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Artigo criado com sucesso.");
  });
};

const deleteArticle = (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM articles.articles WHERE id = ?";

  db.query(q, [id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Artigo deletado com sucesso.");
  });
};

module.exports = {
  getArticles,
  addArticles,
  deleteArticle,
};
