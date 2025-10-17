//const socket = io();
console.log("Hasta aqui llega");
//import { mostrarMediciones } from "../../servidor/LogicaNegocio.js";

//Intento fallido de socket.io
/*socket.on('Nueva_medicion', dato => {
    console.log(dato);
    document.getElementById('co2Value').innerText = dato.Co2;
    document.getElementById('lastUpdate').innerText = dato.Fecha;
});*/

//Actualización periódica de las mediciones
setInterval(async () => {
    const respuesta = await fetch('/mediciones/latest');
    const medicion = await respuesta.json();
    console.log(medicion);
    if (medicion) {
        document.getElementById('co2Value').innerText = medicion.Co2;
        document.getElementById('lastUpdate').innerText = medicion.Fecha;
    }
}, 2000);

