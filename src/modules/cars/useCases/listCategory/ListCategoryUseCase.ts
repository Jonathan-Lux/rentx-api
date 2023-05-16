import { TypeCategory } from "../../entities/TypeCategory";
import { TypeCategoriesRepository } from "../../repositories/implementations/TypeCategoriesRepository";

class ListCategoryUseCase {
  constructor(private listCategory: TypeCategoriesRepository) {}

  execute(): TypeCategory[] {
    const list = this.listCategory.list();

    return list;
  }
}

export { ListCategoryUseCase };
