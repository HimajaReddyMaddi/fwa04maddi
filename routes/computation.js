var express = require('express');
var router = express.Router();
var x=10;
/* GET users listing. */
router.get('/', function(req, res, next) {
  y= Math.cos(x)
  res.send(`[Math.cos()] applied to ${x} is  ${y} `);
  ;
 
});

module.exports = router;