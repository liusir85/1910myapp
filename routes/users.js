var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/reg', function(req, res, next) {
  console.log(req.body);
  // res.send('cnm')
});
router.post('/login', function(req, res, next) {
  requests('http://express.1910.com/web/login',{streaming})

  res.send({errno:0,msg:"ok"});
  //res.send('fff');
});


module.exports = router;