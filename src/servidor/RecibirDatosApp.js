const express = require('express');
const app = express();
app.use(express.json());
import { insertarMediciones } from './LogicaNegocio';


app.post("/mediciones",(req, res) => {
    const {Co2,Fecha} = req.body;
    res.json({status: 'ok', recibido: {Co2, Fecha}});
    insertarMediciones({Co2, Fecha});

    const resultado = {
        Co2: Co2,
        Fecha: Fecha
    }
});
