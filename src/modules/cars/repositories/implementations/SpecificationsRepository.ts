import { Repository, getRepository } from "typeorm";

import { TypeSpecification } from "../../entities/TypeSpecification";
import { TypeSpecificationCreate, TypeSpecificationRepository } from "./TypeSpecificationRepository";


class SpecificationsRepository implements TypeSpecificationRepository {
    private repository : Repository<TypeSpecification>

     constructor(){
        this.repository = getRepository(TypeSpecification)
    }


   async create({name,description}:TypeSpecificationCreate):Promise<void>{
        const specification = this.repository.create({name,description})

        await this.repository.save(specification)
    }

    async list():Promise<TypeSpecification[]>{
        const specification = await this.repository.find()
        return specification
        
    }

   async findByname(name:string):Promise<TypeSpecification>{
        const specification = await this.repository.findOne({name})

        return specification
    }
}

export {SpecificationsRepository}