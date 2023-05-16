import { ListSpecificationController } from "./ListSpecificaitonController";
import { ListSpeficationUseCase } from "./ListSpecificationUseCase";



const specificationRepository = null

const listSpecificationUseCase = new ListSpeficationUseCase(specificationRepository)

const listSpecifcationController = new ListSpecificationController(listSpecificationUseCase)

export {listSpecifcationController}