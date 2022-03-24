module.exports = app => {
  const articles = require("../controllers/article.controller.js");

  var router = require("express").Router();

  // Create a new articles
  //router.post("/", articles.create);
  router.post("/", function (req, res) {
    articles.create
  });


  // Retrieve all articles
  //router.get("/", articles.findAll);
  router.get("/", function (req, res) {
    articles.findAll
  });

  // Retrieve all published articles
  //router.get("/available", articles.findAllAvailable
  router.get("/available", function (req, res) {
    articles.findAllAvailable
  });

  app.use("/api/articles", router);
};
