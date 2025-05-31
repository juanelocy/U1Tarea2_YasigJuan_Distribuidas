module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);
  io.on("connection", (socket) => {
    const cookie = socket.handshake.headers.cookie;
    const user = cookie.split("=").pop();

    socket.on("message", (message) => {
      io.emit("message", {
        user,
        message,
      });
    });
  });
};

const fs = require("fs");
const path = require("path");

io.on("connection", (socket) => {
  const username = socket.handshake.headers.cookie?.split("=")[1] || "Desconocido";

  socket.on("message", (msg) => {
    const data = {
      user: username,
      message: msg,
      time: new Date().toISOString(),
    };

    // Emitir a todos
    io.emit("message", data);

    // Guardar en archivo
    const logPath = path.join(__dirname, "chat-history.txt");
    fs.appendFile(logPath, JSON.stringify(data) + "\n", (err) => {
      if (err) console.error("Error al guardar mensaje:", err);
    });
  });
});
