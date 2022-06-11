import { io } from "../http";
import { AddNewMessageChatService } from "../services/chat/AddNewMessageChatService";
import { CreateChatService } from "../services/chat/CreateChatService";
import { SearchChatService } from "../services/chat/SearchChatService";

interface IMsg {
  room: string;
  name: string;
  message: string;
  nutritionistRut: string;
  clientRut: string;
}

type RoomUser = {
  socket_id: string;
  name: string;
  room: string;
};

type Message = {
  nutritionistRut: string;
  clientRut: string;
  room: string;
  name: string;
  text: string;
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

  socket.on("message", async (data: IMsg) => {
    const message: Message = {
      nutritionistRut: data.nutritionistRut,
      clientRut: data.clientRut,
      room: data.room,
      name: data.name,
      text: data.message,
    };

    //Buscar si existe un chat para esta sala
    const serviceSearchChat = new SearchChatService();
    const responseMessages = await serviceSearchChat.execute(data.room);
    console.log(responseMessages, "responseMessages");

    if (!responseMessages) {
      //1.- Crear chat y almacenar mensaje en la base de datos
      const serviceCreateChat = new CreateChatService();
      const responseCreate = await serviceCreateChat.execute(message);
    } else {
      //2.- Almacenar mensaje en la base de datos
      const serviceAddNewMessage = new AddNewMessageChatService();

      const responseNewMessage = await serviceAddNewMessage.execute({
        name: data.name,
        text: data.message,
        idChat: responseMessages.idChat,
      });
    }

    messages.push(message);

    //2.- Enviar mensaje a todos los usuarios de la sala
    io.to(data.room).emit("message", messages);

    // socket.emit("received", name, message);
  });
});
