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
  rutOwnerMessage: string;
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
  rutOwnerMessage: string;
};

const users: RoomUser[] = [];

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
      rutOwnerMessage: data.rutOwnerMessage,
    };

    //Buscar si existe un chat para esta sala
    const serviceSearchChat = new SearchChatService();
    const responseMessages = await serviceSearchChat.execute(data.room);

    let responseCurrentlyChat = undefined;

    if (!responseMessages) {
      //1.- Crear chat y almacenar mensaje en la base de datos
      const serviceCreateChat = new CreateChatService();
      responseCurrentlyChat = await serviceCreateChat.execute(message);
    } else {
      //2.- Almacenar mensaje en la base de datos
      const serviceAddNewMessage = new AddNewMessageChatService();

      responseCurrentlyChat = await serviceAddNewMessage.execute({
        name: data.name,
        text: data.message,
        idChat: responseMessages.idChat,
        rutOwnerMessage: data.rutOwnerMessage,
      });
    }

    const currentlyMessage = {
      nutritionistRut: data.nutritionistRut,
      clientRut: data.clientRut,
      room: data.room,
      name: data.name,
      text: data.message,
      created_at: responseCurrentlyChat?.created_at,
      rutOwnerMessage: data.rutOwnerMessage,
    };

    io.to(data.room).emit("message", currentlyMessage);

    //2.- Enviar mensaje a todos los usuarios de la sala

    // socket.emit("received", name, message);
  });
});
