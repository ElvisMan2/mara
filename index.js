// app.js

const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Indicar que la carpeta 'public' contiene archivos estáticos
app.use(express.static('public'));

// Importar las rutas existentes
const calificacionesRoutes = require('./routes/calificaciones');
const asistenciaRoutes = require('./routes/asistencia');
const reclamosRoutes= require('./routes/reclamos');

// Usar las rutas en la aplicación
calificacionesRoutes(app);
asistenciaRoutes(app);
reclamosRoutes(app);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

console.log("Hola mundo");
