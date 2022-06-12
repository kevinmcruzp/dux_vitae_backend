import prismaClient from "../../prisma";

class ListAppointmentByRutService {
  async execute(rut: string) {
    const nutritionist = await prismaClient.nutritionist.findFirst({
      where: {
        rut,
      },
    });

    const client = await prismaClient.client.findFirst({
      where: {
        rut,
      },
    });

    if (nutritionist) {
      let appointment = await prismaClient.appointment.findMany({
        where: {
          nutritionistRut: rut,
        },
        include: {
          client: true,
        },
      });

      return appointment;
    }

    if (client) {
      let appointment = await prismaClient.appointment.findMany({
        where: {
          clientRut: rut,
        },
        include: {
          nutritionist: true,
        },
      });

      return appointment;
    }

    return null;
  }
}

export { ListAppointmentByRutService };
