import { Repository } from "typeorm";
import { TypeCategory } from "../../entities/TypeCategory";
import { TypeCategoriesRepository,TypeCreateCategory } from "./TypeCategoriesRepository";
import { getRepository } from "typeorm";


class CategoriesRepository implements TypeCategoriesRepository{

  private repository: Repository<TypeCategory>

  constructor() {
    this.repository = getRepository(TypeCategory)
  }

  async create({ name, description }:TypeCreateCategory):Promise<void> {
   const category = this.repository.create({name,description})
    await this.repository.save(category)
  }

  async list():Promise<TypeCategory[]>{
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name:string):Promise<TypeCategory>{
    const category = await this.repository.findOne({name})
    return category
}
}

export {CategoriesRepository};
