const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mara-db.db');

const getCalificaciones = (req, res) => {
    // Consulta a la base de datos para obtener los datos de los santos
    db.all('SELECT * FROM calificaciones', (err, rows) => {
        if (err) {
            // Manejo de errores si la consulta falla
            return res.status(500).json({ error: err.message });
        }
        // Envío de los resultados como respuesta JSON
        res.json(rows);
    });
};

process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Conexión a la base de datos cerrada.');
        process.exit(0);
    });
});

module.exports={getCalificaciones};