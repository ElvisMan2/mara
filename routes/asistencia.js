// routes/asistencia.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ruta de asistencia");
});

// Puedes agregar más rutas y lógica relacionada con la asistencia aquí

module.exports = router;
