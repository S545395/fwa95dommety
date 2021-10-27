var express = require('express');
var router = express.Router();
var tempVariable = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  tempVariable++;
  res.send(`User accesses are: ${tempVariable}`);
});

module.exports = router;
