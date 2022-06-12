import { Request, Response } from "express";
import { SearchChatService } from "../../services/chat/SearchChatService";

class SearchChatController {
  async handle(request: Request, response: Response) {
    const { room } = request.params;
    console.log(room);

    const service = new SearchChatService();

    const messages = await service.execute(room);

    return response.json(messages);
  }
}

export { SearchChatController };
