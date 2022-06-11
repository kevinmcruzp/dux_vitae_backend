import prismaClient from "../../prisma";

type Message = {
  room: string;
  text: string;
  name: string;
  nutritionistRut: string;
  clientRut: string;
};

class CreateChatService {
  async execute(data: Message) {
    const message = await prismaClient.chat.create({
      data: {
        room: data.room,
        Message: {
          create: {
            name: data.name,
            text: data.text,
          },
        },
        nutritionistRut: data.nutritionistRut,
        clientRut: data.clientRut,
      },
    });

    return message;
  }
}

export { CreateChatService };
