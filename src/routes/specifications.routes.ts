import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { listSpecifcationController } from "../modules/cars/useCases/listSpecification";


const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController() 

specificationRouter.post("/",createSpecificationController.handle)

specificationRouter.get("/", (req, res) => {

  return listSpecifcationController.handle(req,res)

});

export { specificationRouter };
