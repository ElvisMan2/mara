const clientsController = require('../controllers/clientsController');
module.exports = (app)=>{
    app.route('/clients').get(clientsController.getClients)
    app.route('/client').post(clientsController.createClient)
}