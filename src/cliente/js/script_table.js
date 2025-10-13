const socket = io();

socket.on('Nueva_medicion', dato => {
    var table = document.getElementById("historyTableBody");

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = dato.Fecha;
    cell2.innerHTML = dato.Co2;
    cell3.innerHTML = "Normal";
    cell4.innerHTML = dato.Temperatura;
    cell5.innerHTML = "Normal";
});