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
  res.render('sub/partners');
});

router.get('/company', function(req, res, next) {
  res.render('sub/company');
});




router.get('/ser', function(req, res, next) {
  res.render('home/ser', { title: 'Avologic' });
});

router.get('/ser/projekti', function(req, res, next) {
  res.render('ser/projekti');
});



module.exports = router;
