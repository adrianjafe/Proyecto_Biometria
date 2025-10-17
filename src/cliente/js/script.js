//const socket = io();
console.log("Hasta aqui llega");
//import { mostrarMediciones } from "../../servidor/LogicaNegocio.js";

/*socket.on('Nueva_medicion', dato => {
    console.log(dato);
    document.getElementById('co2Value').innerText = dato.Co2;
    document.getElementById('lastUpdate').innerText = dato.Fecha;
});*/

setInterval(async () => {
    const respuesta = await fetch('/mediciones/latest');
    const medicion = await respuesta.json();
    console.log(medicion);
    if (medicion) {
        document.getElementById('co2Value').innerText = medicion.Co2;
        document.getElementById('lastUpdate').innerText = medicion.Fecha;
    }
}, 2000);

