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

## ⚙️ 1. Configuración del servidor Node.js

### · Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/) (Si tenemos instalado npm: npm install node).
- Tener instalado [npm](https://www.npmjs.com/)

### · Inicio servidor
- Abrir una terminal de powershell.
- Abrir la carpeta del servidor en la terminal. (...\Proyecto_Biometria\src\servidor)
- Ejecutar en la terminal: "node server.js". Abrirá el servidor en localhost:3000.
- Abrir en el navegador: localhost:3000.

## 🔌 2. Conexión con Arduino
- Conectar toda la placa y el sensor con la placa al ordenador.

## 📱 3. Conexión con Android

### · Requisitos
- El PC (servidor) y el Android tienen que estar en la misma red.
- El servidor Node.js debe estar en ejecución para que el android pueda enviar datos correctamente.

### · Inicio de envío de datos de la APP
- Iniciar la aplciación de Android.
- Empezar a escanear dispositivos con el botón, "BUSCAR DISPOSITIVOS BTLE NOU 4".
- Si esta todo en orden, el servidor recibirá los datos, los insertara en la base de datos y los mostrará en la página web.












