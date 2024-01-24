const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('rapimoney-db.db');


const getClients = (req, res) => {
    // Consulta a la base de datos para obtener los datos de los santos
    db.all('SELECT * FROM clientes', (err, rows) => {
        if (err) {
            // Manejo de errores si la consulta falla
            return res.status(500).json({ error: err.message });
        }
        // Envío de los resultados como respuesta JSON
        res.json(rows);
    });
};

const createClient = (req, res) => {
    const { dni, nombres, apellidos, fecha_nacimiento, celular, correo, banco, numero_cci } = req.body;

    const sql = `INSERT INTO clientes (dni, nombres, apellidos, fecha_nacimiento, celular, correo, banco, numero_cci) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(sql, [dni, nombres, apellidos, fecha_nacimiento, celular, correo, banco, numero_cci], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Cliente creado exitosamente',
            client_id: this.lastID // Devuelve el ID del cliente recién insertado
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



module.exports={getClients, createClient};