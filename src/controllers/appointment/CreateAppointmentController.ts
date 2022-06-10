import { Request, Response } from "express";
import { CreateAppointmentService } from "../../services/appointment/CreateAppointmentService";

export type AppointmentProps = {
  title: string;
  description: string;
  nutritionistRut: string;
  clientRut: string;
};

class CreateAppointmentController {
  async handle(request: Request, response: Response) {
    const appointment: AppointmentProps = request.body;

    const service = new CreateAppointmentService();
    const data = await service.execute(appointment);
    return response.status(201);
  }
}

export { CreateAppointmentController };
