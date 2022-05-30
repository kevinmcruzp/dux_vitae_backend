import { Request, Response } from "express";
import { ListNutritionistService } from "../../services/nutritionist/ListNutritionistService";

class ListNutritionistController {
  async handle(request: Request, response: Response) {
    const service = new ListNutritionistService();

    const nutritionist = await service.execute();

    return response.json(nutritionist);
  }
}

export { ListNutritionistController };
