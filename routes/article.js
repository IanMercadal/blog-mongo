const {Router} = require('express');
const ArticleController = require('../controllers/article');

const router = Router(); 

router.get("/:category", ArticleController.category);
router.get("/:category/:id", ArticleController.article);
router.get("/article", ArticleController.article);

// CRUD
router.get("/create", ArticleController.create);
router.post("/save", ArticleController.save);
router.put("/edit/:id", ArticleController.edit);
router.delete("/remove/:id", ArticleController.remove);




module.exports = router;