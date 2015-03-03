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
   var scraping = scrape.getData(function (err, data){
       var _len = data.length;
       for(var _i = 0; _i < _len; _i++){
           console.log(_len);
           data[_i].driver.forEach(function(driver){
            console.log(driver.conductor);
            var req = {
                full: driver.conductor
            }
            driverCtrl.create(req, function(err, res){
                console.log(res);
            });
           }); 
       }
       
   });
});
   

module.exports = router;
