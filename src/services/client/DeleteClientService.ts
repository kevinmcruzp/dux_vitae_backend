import prismaClient from "../../prisma";

class DeleteClientService {
  async execute(rut: string) {
    const cliente = await prismaClient.client.delete({
      where: {
        rut,
      },
    });

    return cliente;
  }
}

export { DeleteClientService };
