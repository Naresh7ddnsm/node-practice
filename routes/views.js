var express = require('express');
var views = require('../controllers/routes.views');
var router = express.Router();

router.get('/', views.home);
router.get('/about', views.about);

module.exports = router;