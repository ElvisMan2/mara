const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mara-db.db');

const getAsistencia = (req, res) => {
    // Consulta a la base de datos para obtener los datos 
    db.all('SELECT * FROM calificaciones', (err, rows) => {
        if (err) {
            // Manejo de errores si la consulta falla
            return res.status(500).json({ error: err.message });
        }
        // Envío de los resultados como respuesta JSON
        res.json(rows);
    });
};

const updateAsistencia = (req, res) => {
  const nuevaAsistencia = req.body; // 

  // Realiza las actualizaciones en la base de datos
  nuevaAsistencia.forEach(asistencia => {
    const { codigo, a1, a2, a3, a4, a5, a6, a7, a8 } = asistencia;
    db.run(
      'UPDATE calificaciones SET a1=?, a2=?, a3=?, a4=?, a5=?, a6=?, a7=?, a8=? WHERE codigo = ?',
      [a1, a2, a3, a4, a5, a6, a7, a8, codigo],
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
  });

  res.json({ message: 'Asistencia registrada' });
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

module.exports={getAsistencia, updateAsistencia};