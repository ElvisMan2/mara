const calificacionesController = require('../controllers/calificacionesController');
module.exports=(app)=>{
    app.route('/calificaciones').get(calificacionesController.getCalificaciones)
}