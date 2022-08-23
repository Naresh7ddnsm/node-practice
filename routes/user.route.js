var express = require('express');
var router = express.Router();

var user = require('../controllers/user.controller');

router.post('/login', user.login);
router.post('/register', user.register);
router.get('/logout', user.logout);

module.exports = router;