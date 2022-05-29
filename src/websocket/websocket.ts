import { io } from "../http";

const messages = [];

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("message", (user, message) => {
    console.log(message);
    console.log("hola desde mensaje");

    socket.emit("received", user, message);
  });
});
