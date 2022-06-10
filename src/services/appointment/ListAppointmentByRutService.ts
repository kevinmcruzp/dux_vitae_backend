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
      });

      return appointment;
    }

    if (client) {
      let appointment = await prismaClient.appointment.findFirst({
        where: {
          clientRut: rut,
        },
      });

      return appointment;
    }

    return null;
  }
}

export { ListAppointmentByRutService };
