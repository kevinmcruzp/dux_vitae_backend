import { AppointmentProps } from "../../controllers/appointment/CreateAppointmentController";
import prismaClient from "../../prisma";

class CreateAppointmentService {
  async execute(props: AppointmentProps) {
    const dataAppointment = await prismaClient.appointment.create({
      data: {
        title: props.title,
        description: props.description,
        state: false,
        nutritionistRut: props.nutritionistRut,
        clientRut: props.clientRut,
      },
    });

    return dataAppointment;
  }
}

export { CreateAppointmentService };
