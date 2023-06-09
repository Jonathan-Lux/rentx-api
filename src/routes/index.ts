import { Router } from "express";
import categoriesRouter from "./categories.routes";
import { specificationRouter } from "./specifications.routes";

const routes = Router()


routes.use("/categories", categoriesRouter)
routes.use("/specifications", specificationRouter)


export {routes}