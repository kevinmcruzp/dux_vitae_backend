import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(request: Request, response: Response) {
    const service = new ListCategoryService();

    const categories = await service.execute();

    return response.json(categories);
  }
}

export { ListCategoryController };
