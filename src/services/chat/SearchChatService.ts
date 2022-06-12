import prismaClient from "../../prisma";

class SearchChatService {
  async execute(room: string) {
    try {
      const messages = await prismaClient.chat.findFirst({
        where: {
          room,
        },
        include: {
          Message: true,
        },
      });

      return messages;
    } catch (error) {
      console.log(error);
    }
  }
}

export { SearchChatService };
