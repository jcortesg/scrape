var Spooky = require('spooky')

var params = {
    child:{
        transport: 'http'
    },casper:{
        logLevel: 'debug'
    }
}

var url = "http://localhost/uber/uber.html"

exports.getData= function(cb){
    var spooky = new Spooky(params, function(err){
    if(err){
        return cb(new Error('Failed to initialize SpookyJS'))
        console.log("Fallo!!")
    }
    spooky.start(url);

    spooky.thenOpen("http://localhost/uber/uber.html");
   
    spooky.waitForSelector('.table',function(){});
    spooky.then(function(){
        var trips =  this.evaluate(function(){
            var nodes = document.querySelectorAll('table')
            return [].map.call(nodes, function(node){
                 drivers = [],
                 trips = [];
                 var _rows = node.children[1].children.length 
                for (var _i = 0 ;  _i < _rows ; _i++){
                    var  _cell = node.children[0].children[0].children.length
                    if(_cell == 4){
                        drivers.push( {
                            conductor: node.children[1].children[_i].children[0].innerText,
                            calificacion: node.children[1].children[_i].children[1].innerText,
                            trips: node.children[1].children[_i].children[2].innerText,
                            tarifas: node.children[1].children[_i].children[3].innerText
                        });
                    }else if(_cell == 6 ){
                        trips.push({
                            date : node.children[1].children[_i].children[0].innerText,
                            driver: node.children[1].children[_i].children[1].innerText,
                            time: node.children[1].children[_i].children[2].innerText,
                            km: node.children[1].children[_i].children[3].innerText,
                            status: node.children[1].children[_i].children[5].innerText
                        });
                        if(_rows -2  == _i ){
                            break;
                        }
                    }
                }
                return{
                    driver: JSON.stringify (drivers),
                    trips: JSON.stringify(trips),
               }
            });
        });
        
        this.emit('data', trips)
    });

    spooky.then(function(){
    });
    spooky.run();
});
spooky.on('data', function(data){
    console.log(data);
    return cb(null, bills)
});

spooky.on('console', function(line){
    console.log(line)
});

};
