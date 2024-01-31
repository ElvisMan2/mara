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
const asistenciaRoutes = require('./routes/asistencia'); // Nueva ruta

// Usar las rutas en la aplicación
calificacionesRoutes(app);
app.use('/asistencia', asistenciaRoutes); // La ruta de asistencia estará bajo /asistencia

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

console.log("Hola mundo");
