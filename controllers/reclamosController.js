const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mara-db.db');

const getReclamos = (req, res) => {
    // Consulta a la base de datos para obtener los datos de los reclamos
    db.all('SELECT * FROM calificaciones', (err, rows) => {
        if (err) {
            // Manejo de errores si la consulta falla
            return res.status(500).json({ error: err.message });
        }
        // Envío de los resultados como respuesta JSON
        res.json(rows);
    });
};



const updateReclamos = (req, res) => {
  const nuevosReclamos = req.body; // Suponiendo que envías un array de objetos con las nuevas reclamaciones
  
  // Utilizamos una transacción para garantizar que todas las actualizaciones se realicen correctamente o ninguna de ellas en caso de error
  db.serialize(() => {
      db.run('BEGIN TRANSACTION');
      nuevosReclamos.forEach(rec => {
          const { codigo, reclamo, fecha_reclamo, respuesta, fecha_respuesta } = rec;
          db.run(
              'UPDATE calificaciones SET reclamo=?, fecha_reclamo=?, respuesta=?, fecha_respuesta=? WHERE codigo=?',
              [reclamo, fecha_reclamo, respuesta, fecha_respuesta, codigo],
              (err) => {
                  if (err) {
                      console.error(err.message);
                      res.status(500).json({ error: 'Error al actualizar reclamos' });
                      return;
                  }
              }
          );
      });
      db.run('COMMIT', (err) => {
          if (err) {
              console.error(err.message);
              res.status(500).json({ error: 'Error al actualizar reclamos' });
              return;
          }
          res.json({ message: 'Reclamos actualizados' });
      });
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

module.exports={getReclamos, updateReclamos};