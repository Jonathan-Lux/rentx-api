import { Request,Response } from "express";
import { ListSpeficationUseCase } from "./ListSpecificationUseCase";


class ListSpecificationController{

    constructor(private listSpecificaitonUseCase : ListSpeficationUseCase){}

    handle(req:Request,res:Response){
        const specifications = this.listSpecificaitonUseCase.execute();

        res.json(specifications);
    }

}

export {ListSpecificationController}