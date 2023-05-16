import { Router } from "express";
import multer from "multer"

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { listCategoryController } from "../modules/cars/useCases/listCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRouter = Router();

const upload = multer({
  dest: "./temp"
})

const createCategoryController = new CreateCategoryController()

categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", (req, res) => {
  return listCategoryController.handle(req, res);
});


categoriesRouter.post("/import", upload.single("file"), (req,res)=>{

  importCategoryController.handle(req,res)
})

export default categoriesRouter;
