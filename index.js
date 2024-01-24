const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Indicar que la carpeta 'public' contiene archivos estáticos
app.use(express.static('public'));

const clientsRoutes = require('./routes/clients');
clientsRoutes(app);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
