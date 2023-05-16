import fs from "fs"
import {parse} from "csv-parse"
import { TypeCategoriesRepository } from "../../repositories/implementations/TypeCategoriesRepository"

interface TypeImportCategory{
  name:string;
  description:string
}

class ImportCategoryUseCase {

  constructor(private categoryRepository: TypeCategoriesRepository ){}

    loadCategiesImport(file:Express.Multer.File):Promise<TypeImportCategory[]>{
      return new Promise((resolve, reject)=>{
        const steam = fs.createReadStream(file.path)
        const categories: TypeImportCategory [] = []

        const parseFile = parse()
    
        steam.pipe(parseFile)
    
        parseFile.on("data", async (line)=>{
          const [ name, description] = line

          categories.push({
            name,description
          })
         
        }).on("end",()=>{
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on("error", (error)=>{
          reject(error)
        })
      })  
    }

 async execute(file: Express.Multer.File) {
    const categories = await this.loadCategiesImport(file)
    
    categories.map(category=>{
      const {name,description} = category

      const existCategory = this.categoryRepository.findByName(name)

      if(!existCategory){
        this.categoryRepository.create({name,description})
      }
      
    })
  }
}

export { ImportCategoryUseCase };
