import prismaClient from "../../prisma";

type Message = {
  name: string;
  text: string;
  idChat: string;
};
class AddNewMessageChatService {
  async execute({ name, text, idChat }: Message) {
    try {
      const message = await prismaClient.message.create({
        data: {
          name,
          text,
          idChat,
        },
      });

      return message;
    } catch (error) {
      console.log(error);
    }
  }
}

export { AddNewMessageChatService };
