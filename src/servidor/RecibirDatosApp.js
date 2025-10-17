const express = require('express');
const app = express();
app.use(express.json());
import { insertarMediciones } from './LogicaNegocio.js';
//const { insertarMediciones } = require('./LogicaNegocio');



