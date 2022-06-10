import prismaClient from "../../prisma";

class UpdateAppointmentService {
  async execute(id: string, state = true) {
    const appointment = await prismaClient.appointment.update({
      where: {
        idAppointment: id,
      },
      data: {
        state,
      },
    });

    return appointment;
  }
}

export { UpdateAppointmentService };
