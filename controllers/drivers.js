var mongoose = require('mongoose');
var Driver = mongoose.model('Driver');

//GET
exports.findAllTVShows = function(req, res) {

};
//POST
exports.create = function(req, res) {
    console.log('POST');
    console.log(req);
    var driver = new Driver({
        full_name: req.full,
        name: req.name
    }); 
    driver.save(function(err,driver){
        if(err) return res.send(500, err.message);
    });
    
};
//POST
//PUT
//DELETE
