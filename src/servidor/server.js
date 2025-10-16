import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
import { mostrarMediciones } from './LogicaNegocio.js';

app.use(express.json());
app.use(express.static('../cliente'));

setInterval(() => {mostrarMediciones(io)}, 2000);

server.listen(3000, () => console.log('Servidor en http://localhost:3000'));