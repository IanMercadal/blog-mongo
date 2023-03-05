const {Router} = require('express');
const ArticleController = require('../controllers/article');

const router = Router(); 

router.get("/policy", ArticleController.policy);
router.get("/sports", ArticleController.sports);
router.get("/curious", ArticleController.curious);
router.get("/article", ArticleController.article);

// CRUD
router.get("/create", ArticleController.create);
router.post("/save", ArticleController.save);



module.exports = router;