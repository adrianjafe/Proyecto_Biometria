const socket = io();
console.log("Hasta aqui llega");
socket.on('Nueva_medicion', dato => {
    console.log(dato);
    document.getElementById('co2Value').innerText = dato.Co2;
    document.getElementById('lastUpdate').innerText = dato.Fecha;
});
