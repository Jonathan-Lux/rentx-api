import { inject,injectable } from "tsyringe";
import { TypeCategoriesRepository } from "../../repositories/implementations/TypeCategoriesRepository";

interface TypeCategoryUseCase {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(@inject("CategoriesRepository") private categoriesRepository: TypeCategoriesRepository) {}

  async execute({ name, description }: TypeCategoryUseCase):Promise<void>{
    const checkExistCategoryName = await this.categoriesRepository.findByName(name);
    if (checkExistCategoryName) {
      throw new Error("category already exist");
    }

     this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
