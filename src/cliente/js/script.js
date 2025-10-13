const socket = io();

socket.on('Nueva_medicion', dato => {
    console.log(dato);
    document.getElementById('co2Value').innerText = dato.Co2;
    document.getElementById('tempValue').innerText = dato.Temperatura;
    document.getElementById('lastUpdate').innerText = dato.Fecha;
});