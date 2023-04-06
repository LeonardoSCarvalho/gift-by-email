import setupMiddleware from "@/main/config/middleware"
import setupRoutes from "@/main/config/routes"
import express from "express"

const app = express()
setupMiddleware(app)
setupRoutes(app)

export default app
