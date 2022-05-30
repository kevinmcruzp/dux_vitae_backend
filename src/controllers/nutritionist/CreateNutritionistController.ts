import { Request, Response } from "express";
import { CreateNutritionistService } from "../../services/nutritionist/CreateNutritionistService";

class CreateNutritionistController {
  async handle(request: Request, response: Response) {
    const nutritionist = request.body;

    const service = new CreateNutritionistService();

    const newNutritionist = await service.execute(nutritionist);

    return response.json(newNutritionist);
  }
}

export { CreateNutritionistController };
