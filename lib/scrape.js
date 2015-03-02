var Spooky = require('spooky');
var params ={
    child:{
        transport: 'http'
    },casper:{
        logLevel: 'debug',
        verbose: true,
        exitOnError: true,
        waitTimeout: 30000,
        stepTimeout: 30000,
        userAgent: "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)"
    },options:{
            webSecurityEnabled: false
    }
}

var url = "https://login.uber.com/login"


var spooky = new Spooky(params,function(err){
    if (err) {
        console.log("Failed to initialize SpookyJS")
    }
    var info = []; 
    //metodo para obtener Informacion
    var getInfo = function(){
        
    }
    // Abre la ventana de inicio
    spooky.start(url);
    
    spooky.waitForSelector(".form", function() {});
    
    //Autentica al usuario
    spooky.then(function() {
        this.fill(".form", {
            email: "mserra@kineticprojects.com",
            password: "Matias123"
            },true);
        });
    
    //esperamos URL
    spooky.wait(6000, function() {
        if (!this.requestUrl === 'https://partners.uber.com/home/') {
            this.emit('urltimeout', this.requestUrl);
            this.exit();
        }
    });
    
    //Iniciamos el proceso para obtener la informacion

    spooky.then([{},getInfo]);

    spooky.run();
});

spooky.on('trips',function(trips) {
    console.log(trips);      
    return trips;
});

spooky.on('console', function(line) {
  console.log(line);
});

