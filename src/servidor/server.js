import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
import { insertarMediciones } from './LogicaNegocio.js';
import { mostrarMediciones } from './LogicaNegocio.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../cliente'));

server.listen(3000, () => console.log('Servidor en http://localhost:3000'));

app.post("/mediciones",(req, res) => {
    console.log(req.body);
    const {Co2,Fecha} = req.body;
    res.json({status: 'ok', recibido: {Co2, Fecha}});
    insertarMediciones({Co2, Fecha});
});

app.get("/mediciones/latest", (req, res) => {
    mostrarMediciones((err, data) => {
        if(err){
            res.status(500).json({error: 'Error al obtener la última medición'});
        } else {
            res.json(data);
        }
    });
});
