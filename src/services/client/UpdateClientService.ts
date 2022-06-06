import prismaClient from "../../prisma";

type UpdateClientProps = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

class UpdateClientService {
  async execute(
    rut: string,
    { name, lastName, email, password }: UpdateClientProps
  ) {
    const client = prismaClient.client.update({
      where: {
        rut: rut,
      },
      data: {
        name,
        lastName,
        email,
        password,
      },
    });

    return client;
  }
}

export { UpdateClientService };
