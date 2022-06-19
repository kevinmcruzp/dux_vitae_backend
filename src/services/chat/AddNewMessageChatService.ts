import prismaClient from "../../prisma";

type Message = {
  name: string;
  text: string;
  idChat: string;
  rutOwnerMessage: string;
};
class AddNewMessageChatService {
  async execute({ name, text, idChat, rutOwnerMessage }: Message) {
    try {
      const message = await prismaClient.message.create({
        data: {
          name,
          text,
          idChat,
          rutOwnerMessage,
        },
      });

      return message;
    } catch (error) {
      console.log(error);
    }
  }
}

export { AddNewMessageChatService };
