const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta a tu base de datos .db (ajústala si está en otro sitio)
const dbPath = path.resolve(__dirname, '../database.db');

// Crea conexión (si no existe el archivo, SQLite lo crea automáticamente)
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con SQLite:', err.message);
    } else {
        console.log('Conectado a:', dbPath);
    }
});

module.exports = db;
