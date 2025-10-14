const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const db = require('./config/conexion');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
import { recibirJson } from './LogicaNegocio';

app.use(express.static('../cliente'));

setInterval(() => {
    db.get('SELECT Co2, Temperatura, Fecha FROM Mediciones ORDER BY Id DESC LIMIT 1', (err, row) => {
        if (err) {
            console.error('Error al consultar SQLite:', err.message);
        } else if (row) {
            io.emit('Nueva_medicion', row);
        }
    });
}, 2000);



server.listen(3000, () => console.log('Servidor en http://localhost:3000'));