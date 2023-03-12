import setupMiddleware from "@/main/config/middleware"
import express from "express"

const app = express()
setupMiddleware(app)

export default app
