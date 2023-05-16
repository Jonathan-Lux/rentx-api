import "reflect-metadata"

import express from "express"

import { routes } from "./routes"

import swaggerUi from "swagger-ui-express"

import swaggerFile from "./swagger.json"

import "./database"

import "./shared/container"

const server = express()

server.use(express.json())

server.use(routes)

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

server.listen(3333, ()=>{console.log("server is running")})