var express = require('express');
var router = express.Router();

var views = require('./views.route');
var api = require('./api.route');
var user = require('./user.route');

router.use('/', views);
router.use("/api", api);
router.use("/user", user);

module.exports = router;