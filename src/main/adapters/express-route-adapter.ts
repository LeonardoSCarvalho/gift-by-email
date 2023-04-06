import { HttpRequest, HttpResponse } from "@/infra/controllers/ports"
import { RegisterUserController } from "@/infra/controllers/register-user-controller"
import { Request, Response } from "express"

export const adaptRoute = (controller: RegisterUserController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    console.log(httpResponse.statusCode)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
