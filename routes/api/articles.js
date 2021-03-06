//`/api/articles` (get) - your components will use this to query
// MongoDB for all saved articles

//`/api/articles` (post) - your components will use this
// to save an article to the database

//`/api/articles` (delete) - your components will use this to
// delete a saved article in the database

//`*` (get) - will load your single HTML page (with ReactJS) in
// `client/build/index.html`. Make sure you put this after all other GET routes
const router = require("express").Router();
const articlesController = require("./../../controllers/articlesController");

// Matches withhttp://localhost:3000 "/api/books"
router.route("/")
  .post(articlesController.saveArticle);
  
router.route("/saved").get(articlesController.findAll);
// .post(articlesController.saveArticle)

// Matches with "/api/books/:id"
router
  .route("/saved/:id")
  // .get(articlesController.findById)
  // .post(articlesController.save)
  .delete(articlesController.delete);

// router.route("*").get("client/build/index.html");
module.exports = router;
