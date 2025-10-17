import express from "express";
import http from "http";
const app = express();
import { Server } from "socket.io";
app.use(express.json());
import db from './config/conexion.js';
const server = http.createServer(app);
const io = new Server(server);
app.use(express.static('../cliente'));


//------------------------------------------------------------------------------//
//                          insertarMediciones                                  //
//      Descripción: Recibe los datos json, y los inserta en la base de datos.  //
//------------------------------------------------------------------------------//
export function insertarMediciones(datosjs){
    const {Co2, Fecha} = datosjs;
    const sql = 'INSERT INTO Mediciones (Co2, Fecha) VALUES (?, ?)';
    console.log(datosjs);
    db.run(sql, [Co2, Fecha], (err) => {
        if (err) {
            console.error('Error al insertar en SQLite:', err.message);
        } else {
            console.log('Datos insertados correctamente en la base de datos');
        }
    });
}

//---------------------------------------------------------------------------------------------------------------//
//                                                  mostrarMediciones                                            //
//      Descripción: Recibe un callback, le pide los datos a la base de datos y devuelve un json con los datos.  //
//---------------------------------------------------------------------------------------------------------------//
export function mostrarMediciones(callback){
    db.get('SELECT Co2, Fecha FROM Mediciones ORDER BY Id DESC LIMIT 1', (err, row) => {
        if (err) {
            console.error('Error al consultar SQLite:', err.message);
            callback(err,null);
        } else if (row) {
            //console.log('Última medición:', row);
            callback(null,row);
        }
    });
}
