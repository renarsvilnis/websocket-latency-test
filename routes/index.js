var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('slave', { title: 'Slave', port: req.serverPort});
});

router.get('/slave', function(req, res, next) {
  res.render('slave', { title: 'Slave', port: req.serverPort});
});

router.use('/master', function(req, res) {
  res.render('master', { title: 'Master', port: req.serverPort});
});

module.exports = router;
