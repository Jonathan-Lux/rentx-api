import { TypeCategory } from "../../entities/TypeCategory";

interface TypeCreateCategory {
    name: string;
    description: string;
  }


interface TypeCategoriesRepository{
    create({name,description}:TypeCreateCategory):Promise<void>;
    list():Promise<TypeCategory[]>;
    findByName(name:string):Promise<TypeCategory>
}

export {TypeCategoriesRepository,TypeCreateCategory}