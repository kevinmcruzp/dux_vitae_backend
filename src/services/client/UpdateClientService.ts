import prismaClient from "../../prisma";

type UpdateClientProps = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

class UpdateClientService {
  async execute(
    rut: string,
    { name, lastname, email, password }: UpdateClientProps
  ) {
    const client = prismaClient.client.update({
      where: {
        rut: rut,
      },
      data: {
        name,
        lastname,
        email,
        password,
      },
    });

    return client;
  }
}

export { UpdateClientService };
