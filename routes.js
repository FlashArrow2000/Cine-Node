var controllerpelicula = require('./controllerpelicula.js'); //solicita controller
module.exports = function(app){//entra para hacer consultas
    var clasepelicula = new controllerpelicula();//objeto
    app.post('/api/nuevapelicula', clasepelicula.Guardar);
    app.post('/api/modificapelicula', clasepelicula.Modificar);
    app.post('/api/eliminarpelicula', clasepelicula.Eliminar);
    app.post('/api/seleccionarpelicula', clasepelicula.Seleccionartodos);
    app.post('/api/seleccionarporid', clasepelicula.Seleccionarporid);
    app.post('/api/seleccionarpeliculapornombre', clasepelicula.Seleccionarpornombre);
    //si llama directamente al server entonces:
    app.get('*', function(req, res){//localhost:8080
        res.sendfile('./login.html');//carga unica de la vista
    });
};