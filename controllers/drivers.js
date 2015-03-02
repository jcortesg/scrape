var mongoose = require('mongoose');
var Driver = mongoose.model('Driver');

//GET
exports.findAllTVShows = function(req, res) {

};
//POST
exports.addDriver = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var driver = new Driver({
        name: req.name
    }); 
    driver.save(function(err,driver){
        if(err) return res.send(500, err.message);
        res.status(200);
    });
    
};
//POST
//PUT
//DELETE
