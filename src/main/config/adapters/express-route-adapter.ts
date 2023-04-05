import { HttpRequest, HttpResponse } from "@/infra/controllers/ports"
import { RegisterUserController } from "@/infra/controllers/register-user-controller"
import { Request, Response } from "express"

export const adaptroute = (controller: RegisterUserController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
