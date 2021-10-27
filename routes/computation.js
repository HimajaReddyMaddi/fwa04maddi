var express = require('express');
var router = express.Router();
var x=10;
/* GET users listing. */
router.get('/', function(req, res, next) {
  y= Math.cos(x)
  z= Math.asin(x)
  a=Math.asinh(x)
  res.send(`[Math.cos()] applied to ${x} is  ${y} \n [Math.asin()] applied to ${x} is  ${z} \n [Math.asinh()] applied to ${x} is  ${a} `);
  ;
 
});

module.exports = router;