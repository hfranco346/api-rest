'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3678 ;

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res)=>{ 
    if (err) {
        console.log("Error");
                
    } else {
        console.log("Conexión a mongodb correcta");        
        app.listen(port, function(){
            console.log(`Servidor corriendo en ${port}`); 
        });
    }
    
});


