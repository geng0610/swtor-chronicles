var express = require('express');
var router = express.Router();
var ua = require('universal-analytics');

var visitor = ua('UA-124825152-1'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', {});
});

router.get('/signup', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('signup', {});
});

// router.get('/signup', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   visitor.pageview("/signup").send()
//   res.redirect('http://www.swtor.com/r/RhG7QT');
// });

router.get('/ig', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  visitor.pageview("/ig").send()
  res.redirect('https://www.instagram.com/starwars_swtor_chronicles/');
});

router.get('/fb', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  visitor.pageview("/fb").send()
  res.redirect('https://www.facebook.com/Starwars.SWTOR.Chronicles/');
});

router.get('/yt', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  visitor.pageview("/yt").send()
  res.redirect('https://www.youtube.com/channel/UC3HWWQUr7l87bYN_-aaAWDQ');
});

module.exports = router;
