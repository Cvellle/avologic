var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtection = csrf(); //{ cookie: false }
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Avologic' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects');
});

router.get('/mission', function(req, res, next) {
  res.render('mission');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


router.get('/partners', function(req, res, next) {
  res.render('partners');
});

router.get('/company', function(req, res, next) {
  res.render('company');
});




module.exports = router;
