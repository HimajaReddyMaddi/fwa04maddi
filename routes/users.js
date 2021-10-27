var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var x=0;
  res.send(`User accesses are: ${x}`);
  x++;
 
});

module.exports = router;
