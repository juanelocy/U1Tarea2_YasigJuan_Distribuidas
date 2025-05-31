# Chat en Tiempo Real con Sockets

**Estudiante:** [Juan Carlos Yasig]  
**Fecha de entrega:** 31 de mayo de 2025

---

## Introducción

Este proyecto consiste en la implementación de un sistema de chat en tiempo real utilizando **Node.js** y **Socket.io**. Su propósito es permitir la comunicación instantánea entre múltiples usuarios a través de un canal web interactivo y dinámico.

Los sockets permiten mantener una conexión abierta entre el cliente y el servidor, lo cual es ideal para aplicaciones como chats, juegos multijugador o sistemas de notificaciones en vivo.

---

## Repositorio Base

Repositorio base proporcionado por el docente:  
[https://github.com/paulosk8/webChat/tree/main](https://github.com/paulosk8/webChat/tree/main)

Para comenzar, se debe clonar este repositorio y trabajar sobre las ramas existentes:

- **Rama principal:** Contiene el código base inicial.
- **Rama `implementacion-chat`:** Versión final del proyecto de referencia. (usar esta rama)

---

##  Implementación del Proyecto

### Estructura del Código

El proyecto está organizado en las siguientes carpetas:

- `/public`: Archivos estáticos (CSS, JS, HTML).
- `/views`: Vistas renderizadas.
- `/routes`: Rutas del servidor.
- `/middlewares`: Funciones de autenticación y control de acceso.
- `server.js`: Lógica principal del servidor, configuración de sockets y cookies.

### Mejoras en el Diseño

Se realizaron mejoras en los estilos visuales del chat para hacerlo más moderno y limpio. Se personalizaron los colores, fuentes y distribución para mejorar la experiencia del usuario.

### Características Adicionales

- **Botón de emojis:** Se agregó un botón decorativo para emojis (aunque no funcional aún).
  - Para insertar emojis manualmente, puedes usar el atajo del sistema operativo:
    - En Windows: `Win + .`
- **Preparación para futuras funcionalidades:** El diseño contempla espacio y estructura para agregar historial de mensajes, notificaciones y cifrado básico.

---

## Instrucciones de Ejecución

1. Clonar el repositorio:
   git clone https://github.com/juanelocy/U1Tarea2_YasigJuan_Distribuidas.git
   cd webChat
2. Instalar las dependencias:
    npm install
3. Ejecutar el servidor:
    node server.js
4. Abrir en el navegador:
    http://localhost:3000

---

## Capturas de pantalla
Implementacion del chat mas la agregacion de emojis y cambio de estilos mas agradable (/capturasDePantalla/Emojis.png)
[/capturasDePantalla/Emojis.png](/capturasDePantalla/Emojis.png)

Visualizacion final (/capturasDePantalla/Interactividad.png)
[/capturasDePantalla/Interactividad.png](/capturasDePantalla/Interactividad.png)

---

## Conclusiones
Esta tarea permitió afianzar los conocimientos sobre comunicación en tiempo real usando Socket.io, así como la integración de vistas, rutas y middlewares en una aplicación Node.js.
### Retos y soluciones:
-Estilos CSS: Fue necesario reorganizar algunas clases para lograr una interfaz más intuitiva.
-Botón de emojis: Aunque se implementó visualmente, no se logró integrar un selector funcional. Como alternativa, se puede usar Win + . en Windows para abrir el panel de emojis del sistema.

---

## Referencias
### Documentacion Socket.io: https://socket.io/docs/
### Documentacion Node.js: https://expressjs.com/
### MDN Web Docs - CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
### Atajo de teclado para windows: https://support.microsoft.com/en-us/windows/use-emoji-in-windows-10-1e5f0de3-0243-9362-1c05-40c6b0c5e3f8