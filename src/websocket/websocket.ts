import { io } from "../http";

type RoomUser = {
  socket_id: string;
  name: string;
  room: string;
};

type Message = {
  room: string;
  name: string;
  text: string;
  createdAt: Date;
};

const users: RoomUser[] = [];

const messages: Message[] = [];

io.on("connection", (socket) => {
  socket.on("room", (room, name) => {
    //Para entrar en una sala
    socket.join(room);

    const userInRoom = users.find(
      (user) => user.name === name && user.room === room
    );

    if (userInRoom) {
      userInRoom.socket_id = socket.id;
    } else {
      users.push({
        socket_id: socket.id,
        name,
        room,
      });
    }
  });

  socket.on("message", (data) => {
    //1.- Almacenar mensaje en la base de datos

    //2.- Enviar mensaje a todos los usuarios de la sala

    const message: Message = {
      room: data.room,
      name: data.name,
      text: data.message,
      createdAt: new Date(),
    };

    messages.push(message);

    console.log(messages);

    io.to(data.room).emit("message", messages);

    // socket.emit("received", name, message);
  });

  // //mesanges privados
  // socket.on("private message", (anotherSocketId, msg) => {
  //   socket.to(anotherSocketId).emit("private message", socket.id, msg);
  // });
});
