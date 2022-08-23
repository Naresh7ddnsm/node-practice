let express = require('express');
let router = express.Router();
let auth = require('./../middleware/auth')
let views = require('../controllers/views.controller');

router.get('/', auth, views.Home);
router.get('/about', auth, views.About);

router.get('/login', views.Login);
router.get('/register', views.Register);

module.exports = router;