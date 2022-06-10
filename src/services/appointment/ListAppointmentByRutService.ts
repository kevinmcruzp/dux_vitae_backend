import prismaClient from "../../prisma";

class ListAppointmentByRutService {
  async execute(rut: string) {
    const appointment = await prismaClient.appointment.findFirst({
      where: {
        clientRut: rut,
      },
    });

    return appointment;
  }
}

export { ListAppointmentByRutService };
