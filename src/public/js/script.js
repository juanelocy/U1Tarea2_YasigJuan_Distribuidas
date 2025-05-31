const socket = io();
const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");
const messageInput = document.querySelector("#message");

// Pedir permiso de notificación al cargar la página
if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

// Función para cifrar y descifrar
function encrypt(text) {
  return btoa(unescape(encodeURIComponent(text)));
}

function decrypt(text) {
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch (e) {
    console.error("Error al decodificar:", e);
    return text;
  }
}

// Función de notificación
function showNotification(user, message) {
  if (Notification.permission === "granted") {
    new Notification(`${user} dice:`, {
      body: message,
      icon: "/img/perfil.png",
    });
  }
}

// Enviar mensaje cifrado
send.addEventListener("click", () => {
  const encrypted = encrypt(messageInput.value.trim());
  if (encrypted) {
    socket.emit("message", encrypted);
    messageInput.value = "";
  }
});

// Recibir mensaje
socket.on("message", ({ user, message }) => {
  const decrypted = decrypt(message);

  const msg = document.createRange().createContextualFragment(`
    <div class="message">
      <div class="image-container">
        <img src="/img/perfil.png">
      </div>
      <div class="message-body">
        <div class="user-info">
          <span class="username">${user}</span>
          <span class="time">Hace un momento</span>
        </div>
        <p>${decrypted}</p>
      </div>
    </div>
  `);

  allMessages.append(msg);
  showNotification(user, decrypted);
});
