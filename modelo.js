var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/examen',function(err){
    if(!err){
        console.log('conexion mongodb');
    }
});

var mongooseSchema = mongoose.Schema;

var personasSchema = {
    "nombre":String,
    "apellido": String 
}

module.exports =mongoose.model('personas',personasSchema);