const express = require("express");
const app= express();
const port=3000;

// Indicar que la carpeta 'public' contiene archivos estáticos
app.use(express.static('public'));

const calificacionesRoutes=require('./routes/calificaciones')
calificacionesRoutes(app);

app.listen(port);

console.log("hola mundo");