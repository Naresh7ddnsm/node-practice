var express = require('express');
var views = require('../routes/views');
var router = express.Router();

router.use('/', views);

module.exports = router;