const reclamosController = require('../controllers/reclamosController');

module.exports=(app)=>{
    app.route('/reclamos').get(reclamosController.getReclamos); //falta
    app.route('/reclamos').put(reclamosController.updateReclamos);//falta
}
