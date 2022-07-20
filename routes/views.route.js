var express = require('express');
var router = express.Router();

var views = require('../controllers/views.controller');

router.get('/', views.Home);
router.get('/about', views.About);

router.get('/login', views.Login);
router.get('/register', views.Register);

module.exports = router;