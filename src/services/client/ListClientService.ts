import prismaClient from "../../prisma";

class ListClientService {
  async execute() {
    const list = prismaClient.client.findMany();

    return list;
  }
}

export { ListClientService };
