const express = require('express');
const app = express();
app.use(express.json());

export function recibirJson(){
    app.post('LogicaNegocio', (req, res) => {
    const {Co2, Fecha}  = req.body;
    res.json({status: 'ok' , recibido: {Co2, Fecha}});
    });
}
