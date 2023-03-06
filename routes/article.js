const {Router} = require('express');
const ArticleController = require('../controllers/article');

const router = Router(); 

router.get("/:category", ArticleController.category);
router.get("/:category/:id", ArticleController.article);
router.get("/article", ArticleController.article);

// CRUD
router.get("/create", ArticleController.create);
router.post("/save", ArticleController.save);



module.exports = router;