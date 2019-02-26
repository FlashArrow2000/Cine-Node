//Inicializacion
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port     = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/Cine');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
app.configure(function(){
    app.use(express.static(__dirname + '/'));//Permite enviar trabajar todos los datos en el server
    app.use(express.logger('dev'));//libreria para debugear
    app.use(express.methodOverride());
});
var bodyParser= require('body-parser');//permite recibir datos que envie el clinte
app.use(bodyParser.json({limit: '50mb'}));//libreria para enviar datos
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));//libreria para encriptar
require('./routes.js')(app); //se le envia al arcivho routes.js todo express

//cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);