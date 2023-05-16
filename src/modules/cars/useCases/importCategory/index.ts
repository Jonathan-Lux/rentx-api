import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";


const categoryRepository = new CategoriesRepository()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)

const importCategoryController = new ImportCategoryController(importCategoryUseCase)


export {importCategoryController}