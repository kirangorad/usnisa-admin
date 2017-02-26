var express = require('express');
var router = express.Router();

//load up the Property model
//var Property = require('../models/property');
//load up the Feedback model
var Feedback = require('../models/feedback');
//load up the Property model
var Blog = require('../models/blog');

//to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({status:401,msg:'login first'});
}

module.exports = function(passport) {
	
	/* GET property,Feedback listing counts. */
	router.get('/', isLoggedIn, function(req, res, next) {
		
		var noOfProperties = noOfFeedbacks = noOfBlogs = 0;
		
		/*
		//Find all properties in db
		Property.count({}, function(err, propertyCount) {
		  if (err) { throw err; }
			//Find all feedbacks in db
			Feedback.count({}, function(err, feedbackCount) {
				if (err) { throw err; }
				res.json({status : 200, propertyCount : propertyCount, feedbackCount : feedbackCount});
			});
		});	
		*/

		//Find all properties in db
		Blog.count({}, function(err, blogCount) {
		  if (err) { throw err; }
			//Find all feedbacks in db
			Feedback.count({}, function(err, feedbackCount) {
				if (err) { throw err; }
				res.json({status : 200, blogCount : blogCount, feedbackCount : feedbackCount});
			});
		});
	});

	return router;
};

