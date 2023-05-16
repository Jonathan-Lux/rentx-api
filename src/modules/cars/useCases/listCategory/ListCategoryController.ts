import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(req: Request, res: Response) {
    const list = this.listCategoryUseCase.execute();

    return res.json(list);
  }
}

export { ListCategoryController };
