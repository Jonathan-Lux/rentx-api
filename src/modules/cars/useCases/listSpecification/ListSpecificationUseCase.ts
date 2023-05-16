import { TypeSpecification } from "../../entities/TypeSpecification";
import { TypeSpecificationRepository } from "../../repositories/interfaceRepository/TypeSpecificationRepository";



class ListSpeficationUseCase{

    constructor(private listSpecifcation : TypeSpecificationRepository ){}

    execute():TypeSpecification[]{
        const list = this.listSpecifcation.list()

        return list
    }
}

export {ListSpeficationUseCase}
