const asistenciaController = require('../controllers/asistenciaController');

module.exports=(app)=>{
    app.route('/asistencia').get(asistenciaController.getAsistencia);

}
