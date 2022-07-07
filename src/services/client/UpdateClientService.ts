import prismaClient from "../../prisma";

type UpdateClientProps = {
  name: string;
  lastName: string;
  birthday?: string;
  gender?: string;
  phone?: string;
  description?: string;
};

class UpdateClientService {
  async execute(
    rut: string,
    { name, lastName, birthday, gender, phone, description }: UpdateClientProps
  ) {
    const client = prismaClient.client.update({
      where: {
        rut: rut,
      },
      data: {
        name,
        lastName,
        birthday,
        gender,
        phone,
        description,
      },
    });

    return client;
  }
}

export { UpdateClientService };
