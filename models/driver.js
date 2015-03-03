exports = module.exports = function(app, mongoose) {
    var driverSchema = new mongoose.Schema({
        full_name:  {type: String},
        name:       {type: String},
        lastname:   {type: String},
        email:      {type: String},
        phome:      {type: String},
        summary:    {type: String}
    });

    mongoose.model('Driver',driverSchema);

};
