var express = require('express');
var router = express.Router();
var count = require('../models/count.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	count.getCount(function(err,count){
		if (err) {
			count = -1;
		};
		res.render('index', { title: 'Express',
							   count : count });
	});
  
});

module.exports = router;
