import {inject, injectable} from "tsyringe"
import { TypeSpecificationRepository } from "../../repositories/interfaceRepository/TypeSpecificationRepository";
interface TypeSpecificationUseCase {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(@inject("SpecificationsRepository") private createSpecification: TypeSpecificationRepository) {}

 async execute({ name, description }: TypeSpecificationUseCase):Promise<void> {
    const checkExistSpecification = await this.createSpecification.findByname(name);
    if (checkExistSpecification) {
      throw new Error("Specification Already Exists");
    }
    await this.createSpecification.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
