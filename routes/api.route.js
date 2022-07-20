var express = require('express');
var router = express.Router();

var api = require('../controllers/api.controller');

router.get('/get-todo', api.getToDo);

module.exports = router;