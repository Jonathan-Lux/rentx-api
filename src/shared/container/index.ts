import { container } from "tsyringe";
import { TypeCategoriesRepository } from "../../modules/cars/repositories/implementations/TypeCategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { TypeSpecificationRepository } from "../../modules/cars/repositories/implementations/TypeSpecificationRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";


container.registerSingleton<TypeCategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<TypeSpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

