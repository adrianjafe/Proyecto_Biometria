# Proyecto_Biometria - Sprint 0
Proyecto de biometria del curso 3º de GTI UPV

Este repositorio contiene el desarrollo de un sistema de monitorización de CO₂, realizado para el Sprint0 del proyecto del primer cuatrimestre de 3º del Grado en Tecnologías Interactivas en la Universitat Politècnica de València (Campus de Gandía).

El proyecto integra hardware, comunicación inalámbrica, desarrollo móvil, backend y visualización web, abarcando de forma transversal varias competencias técnicas: electrónica, programación de microcontroladores, desarrollo de apps, bases de datos y frontends web.

Objetivos del Proyecto:

- Desarrollar un sistema IoT funcional que combine hardware y software de extremo a extremo.

- Aplicar comunicación inalámbrica (Bluetooth) para transmitir datos de sensores a dispositivos móviles.

- Diseñar y desplegar un backend capaz de almacenar datos de forma fiable y escalable.

- Implementar una interfaz web que muestre los datos de forma intuitiva y atractiva.

- Evaluar el rendimiento del sistema: latencia de transmisión, frecuencia de muestreo y estabilidad de la conexión.

- Trabajar en equipo, siguiendo buenas prácticas de control de versiones y documentación.

# Proyecto hecho con Node.js, Android y Arduino

A continuación, se muestra cómo desplegar el servidor con **Node.js**, conectar un **dispositivo Android** al mismo mediante la red local y conectar la **placa Arduino** a través del **Arduino IDE** o conexión serie.

---

## 📁 Estructura del proyecto

├── doc
| ├── Android.pdf
| ├── Arduino.pdf
| └── Servidor.pdf
|
├── src
│ ├── cliente
| | ├── css
| | ├── js
| | ├── arduino-history.html
| | └── index.html
| |
│ ├── servidor
| | ├── config
| | ├── **LogicaNegocio.js**
| | ├── RecibirDatosApp.js
| | ├── database.db
| | └── **server.js**
| |
│ └── telefono
|   ├── app
|   | └── src
|   |  └── main
|   |
|   └── gradle
|
└── README.md








