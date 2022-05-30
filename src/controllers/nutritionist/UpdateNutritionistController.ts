import { Request, Response } from "express";
import { UpdateNutritionistService } from "../../services/nutritionist/UpdateNutritionistService";

class UpdateNutritionistController {
  async handle(request: Request, response: Response) {
    const { rut } = request.params;
    const { name, lastname, email, password } = request.body;

    const service = new UpdateNutritionistService();

    const nutritionist = await service.execute(rut, {
      name,
      lastname,
      email,
      password,
    });

    return response.json(nutritionist);
  }
}

export { UpdateNutritionistController };
