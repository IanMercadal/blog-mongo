const {Router} = require('express');
const ArticleController = require('../controllers/article');

const router = Router(); 

router.get("/prueba", ArticleController.prueba);
module.exports = router;