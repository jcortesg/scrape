var express = require ('express');
var router =express.Router();
var mongoose = require('mongoose');
var scrape = require('../lib/localscrape')
//Import models
var driver = require('../models/driver')(express,mongoose);
//Import Controllers
var driverCtrl = require('../controllers/drivers');
/*GET scraping Uber */

router.get('/',function(req, res, next){
   scrape.getData( function (err, data){
       console.log("Callback")
   });
});

module.exports = router;
