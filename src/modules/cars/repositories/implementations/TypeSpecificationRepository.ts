import { TypeSpecification } from "../../entities/TypeSpecification"

interface TypeSpecificationCreate{
    name:string,
    description:string,
}

interface TypeSpecificationRepository{
    create({name,description}:TypeSpecificationCreate):Promise<void>
    findByname(name:string):Promise<TypeSpecification>
    list():Promise<TypeSpecification[]>
}

export {TypeSpecificationRepository,TypeSpecificationCreate}