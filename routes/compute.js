var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


  dummyUrl = "https://dummy.com/path" + req.url;
  const url = new URL(dummyUrl);
  const search_params = url.searchParams;
  
  var randomVal = Math.floor((Math.random() * 10) + 1);
  
  if(search_params.get("x")){
    randomVal = search_params.get("x");
  }
  
  res.write(`Math.atan() applied to ${randomVal} is ${Math.atan(randomVal)}\n`);
  res.write(`Math.exp() applied to ${randomVal} is ${Math.exp(randomVal)}\n`);
  res.write(`Math.expm1() applied to ${randomVal} is ${Math.expm1(randomVal)}`);
  res.send();
});

module.exports = router;
